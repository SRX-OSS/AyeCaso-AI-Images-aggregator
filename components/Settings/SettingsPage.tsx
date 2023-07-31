"use client";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { IProfile } from "./types";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import useUser from "@/hooks/Auth/useUser";
import { GeneralErrorMessage } from "@/lib/MessageEnum";
import { TechnicalErrorMessages } from "@/lib/MessagesEnum";
import { cn } from "@/lib/utils";
import { updateUser } from "@/src/graphql/mutations";
import { getUser } from "@/src/graphql/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { API } from "aws-amplify";
import { format } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(30, {
      message: "Name must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please enter your email.",
    })
    .email(),
  dob: z.date().optional(),
  tagline: z.string().max(160).min(4).optional(),
  links: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .max(5)
    .min(0),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export default function SettingsPage() {
  const { user } = useUser();

  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    mode: "onChange",
  });

  const getUserData = async () => {
    try {
      if (!user?.user_id)
        throw new Error(GeneralErrorMessage.AUTH_SESSION_NOT_FOUND_ERROR);

      const { data }: any = await API.graphql({
        query: getUser,
        variables: { id: user?.user_id },
      });

      const userDoc: IProfile = data?.getUser;
      if (data?.getUser?.id) {
        const links: any = userDoc?.links?.map((url) => ({ value: url })) || [];

        form.setValue("links", links);
        form.setValue("tagline", userDoc?.tagline);
        form.setValue("dob", new Date(userDoc?.dob || ""));
        form.setValue("email", user?.email);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user?.id) {
      getUserData();
      form.setValue("username", user?.username);
    }
  }, [user?.id]);

  const { fields, append, remove } = useFieldArray({
    name: "links",
    control: form.control,
  });

  const onSubmit = async (data: ProfileFormValues) => {
    try {
      if (!user?.user_id)
        throw new Error(GeneralErrorMessage.AUTH_SESSION_NOT_FOUND_ERROR);

      setLoading(true);
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user?.user_id,
            dob: data?.dob,
            tagline: data?.tagline,
            links: data.links?.map((url) => url.value),
          },
        },
      });

      toast({
        title: "Profile Updated!",
      });
    } catch (error) {
      toast({
        title: TechnicalErrorMessages.GENERAL_ERROR,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Avatar className=" h-20 w-20 sm:h-40 sm:w-40 border-2 border-gray-200 m-auto  mt-5">
        <AvatarImage
          src={!user?.picture ? "/02.png" : user?.picture}
          alt={user?.name}
          referrerPolicy="no-referrer"
        />
        <AvatarFallback>{user?.name?.[0]}</AvatarFallback>
      </Avatar>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 pt-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="flex justify-start items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your Email"
                    disabled
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your email address, it{"'"}s required to contact you in case
                  of security or other important matter. As of now its not
                  editable.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Your Username" disabled {...field} />
                </FormControl>
                <FormDescription>
                  This is the name that will be displayed on your profile and in
                  emails. Not Editable as of now.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dob"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tagline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tagline</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little bit about yourself"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormDescription>A short intro about you</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            {fields.map((field, index) => (
              <FormField
                control={form.control}
                key={field.id}
                name={`links.${index}.value`}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={cn(index !== 0 && "sr-only")}>
                      URLs
                    </FormLabel>
                    <FormDescription className={cn(index !== 0 && "sr-only")}>
                      Add links to your website, blog, or social media profiles.
                    </FormDescription>
                    <FormControl>
                      <div className="flex justify-start items-center gap-1">
                        <Input {...field} placeholder={`Link ${index + 1}`} />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className=""
                          onClick={() => remove(index)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => append({ value: "" })}
            >
              + Add URL
            </Button>
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            )}
            Update profile
          </Button>
        </form>
      </Form>{" "}
    </>
  );
}

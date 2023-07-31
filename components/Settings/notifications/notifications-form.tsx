"use client";

import { IProfile } from "../types";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import useUser from "@/hooks/Auth/useUser";
import { GeneralErrorMessage } from "@/lib/MessageEnum";
import { TechnicalErrorMessages } from "@/lib/MessagesEnum";
import { updateUser } from "@/src/graphql/mutations";
import { getUser } from "@/src/graphql/queries";
import { zodResolver } from "@hookform/resolvers/zod";
import { Databases, Query } from "appwrite";
import { API } from "aws-amplify";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const notificationsFormSchema = z.object({
  communication_emails: z.boolean().default(false).optional(),
  social_emails: z.boolean().default(false).optional(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
});

type NotificationsFormValues = z.infer<typeof notificationsFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<NotificationsFormValues> = {
  communication_emails: false,
  marketing_emails: false,
  social_emails: false,
  security_emails: true,
};

export function NotificationsForm() {
  const { user } = useUser();

  const [loading, setLoading] = useState<boolean>(false);
  const [userDocId, setUserDocId] = useState<string>("");

  const form = useForm<NotificationsFormValues>({
    resolver: zodResolver(notificationsFormSchema),
    defaultValues,
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
        form.setValue("communication_emails", userDoc?.communication_emails);
        form.setValue("marketing_emails", userDoc?.marketing_emails);
        setUserDocId(userDoc?.id || "");
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (user?.user_id) {
      getUserData();
    }
  }, [user?.user_id]);

  const onSubmit = async (data: NotificationsFormValues) => {
    try {
      if (!user?.user_id)
        throw new Error(GeneralErrorMessage.AUTH_SESSION_NOT_FOUND_ERROR);

      setLoading(true);
      await API.graphql({
        query: updateUser,
        variables: {
          input: {
            id: user?.user_id,
            communication_emails: data?.communication_emails,
            marketing_emails: data?.marketing_emails,
          },
        },
      });

      toast({
        title: "Notification Settings Updated!",
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <h3 className="mb-4 text-lg font-medium">Email Notifications</h3>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="communication_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Communication emails
                    </FormLabel>
                    <FormDescription className="max-w-[95%]">
                      Receive emails about your account activity.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="marketing_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">
                      Marketing emails
                    </FormLabel>
                    <FormDescription className="max-w-[95%]">
                      Receive emails about new products, features, and more.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="security_emails"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Security emails</FormLabel>
                    <FormDescription className="max-w-[95%]">
                      Receive emails about your account activity and security.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      disabled
                      aria-readonly
                    />
                  </FormControl>
                </FormItem>
              )}
            />{" "}
            <FormField
              control={form.control}
              name="social_emails"
              render={({ field }) => (
                <FormItem className="flex text-muted-foreground flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel className="text-base">Social emails</FormLabel>
                    <FormDescription>Coming Soon...</FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      disabled
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
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
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
          )}
          Update notifications
        </Button>
      </form>
    </Form>
  );
}

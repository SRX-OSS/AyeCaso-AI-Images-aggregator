"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import useUser from "@/hooks/Auth/useUser";
import { TechnicalErrorMessages } from "@/lib/MessagesEnum";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export function DisplayForm() {
  const { logOut } = useUser();

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    try {
      setLoading(true);

      logOut();
      toast({
        title: "Account Disabled!",
        description:
          "Your account has been disabled and will remain so for less than 30 days from today. If it is not recovered within 30 days, it will be permanently deleted.",
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
    <section className="space-y-8">
      <Button
        disabled={loading}
        onClick={onSubmit}
        className="flex justify-center items-center gap-2 bg-gradient-to-r from-red-500 to-orange-600 text-white"
      >
        {loading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M49.0242 14.4358C43.3597 12.5214 37.2232 12.5214 31.5588 14.4358L30.5226 14.786C25.2023 16.5841 20.6721 20.1749 17.7068 24.944L17.5034 25.2712C14.4253 30.2217 13.3205 36.1484 14.408 41.8755C15.4616 47.4241 18.4999 52.399 22.955 55.8702L23.72 56.4662C24.5986 57.1508 25.0473 58.2719 24.784 59.3541L24.5935 60.1374C24.3954 60.9518 24.4167 61.8042 24.6553 62.6078C25.2527 64.62 27.102 66 29.201 66H32.791V58C32.791 56.6193 33.9103 55.5 35.291 55.5C36.6717 55.5 37.791 56.6193 37.791 58V66H42.791V58C42.791 56.6193 43.9103 55.5 45.291 55.5C46.6717 55.5 47.791 56.6193 47.791 58V66H51.3893C53.4834 66 55.3284 64.6233 55.9244 62.6158C56.1644 61.8073 56.184 60.9493 55.981 60.1306L55.7953 59.3821C55.5247 58.2907 55.9759 57.1573 56.8629 56.4662L57.628 55.8702C62.083 52.399 65.1213 47.4241 66.1749 41.8755C67.2624 36.1484 66.1576 30.2217 63.0795 25.2712L62.8761 24.944C59.9108 20.1749 55.3806 16.5841 50.0604 14.786L49.0242 14.4358ZM25.8269 33C27.9705 31.7624 30.6115 31.7624 32.7551 33C34.8987 34.2376 36.2192 36.5248 36.2192 39C36.2192 41.4752 34.8987 43.7624 32.7551 45C30.6115 46.2376 27.9705 46.2376 25.8269 45C23.6833 43.7624 22.3628 41.4752 22.3628 39C22.3628 36.5248 23.6833 34.2376 25.8269 33ZM54.7551 33C52.6115 31.7624 49.9705 31.7624 47.8269 33C45.6833 34.2376 44.3628 36.5248 44.3628 39C44.3628 41.4752 45.6833 43.7624 47.8269 45C49.9705 46.2376 52.6115 46.2376 54.7551 45C56.8987 43.7624 58.2192 41.4752 58.2192 39C58.2192 36.5248 56.8987 34.2376 54.7551 33Z"
              fill="#C2CCDE"
            />
          </svg>
        )}
        Yes, Delete My Account
      </Button>
    </section>
  );
}

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface IProps {
  openLoginPromptModal: any;
  setOpenLoginPromptModal: any;
  header?: string;
  className?: string;
}

const LoginPrompt = ({
  openLoginPromptModal,
  setOpenLoginPromptModal,
  header = "To continue, Login to AyeHigh.",
  className,
}: IProps) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center pl-5 pr-5 flex-col pb-5 w-full space-x-4"
      )}
    >
      <Dialog
        open={openLoginPromptModal}
        onOpenChange={setOpenLoginPromptModal}
      >
        <DialogContent className="max-h-[85vh] h-auto overflow-auto scrollbar-thin  scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-800 dark:scrollbar-track-gray-900">
          <DialogHeader>
            <DialogTitle className="text-lg  flex justify-center items-center gap-2">
              <div>Login</div>
            </DialogTitle>
            <DialogDescription className="text-md pt-1 text-gray-500 pb-3 flex justify-center items-center gap-2">
              {header}
            </DialogDescription>
            <div className="flex flex-col gap-5  p-4  pr-10 pl-10">
              <Link href="/login">
                <Button
                  type="button"
                  className="w-full flex justify-center items-center gap-2 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                  <div>Login</div>
                </Button>
              </Link>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginPrompt;

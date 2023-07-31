import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export enum ElocalStoreKeys {
  isAccountInitialized = "init",
}

export const greetMessage = () => {
  const now = new Date();

  // Get the current hour (0-23)
  const hour = now.getHours();

  // Determine the appropriate greeting message based on the time of day
  if (hour > 0 && hour < 6) {
    return "Good Night";
  } else if (hour < 12) {
    return "Good Morning";
  } else if (hour < 20) {
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
};

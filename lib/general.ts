export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getDayGreetings = () => {
  const myDate = new Date();
  const hrs = myDate.getHours();

  let greet = "";

  if (hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";
  return greet;
};

export const isObjectPropertiesEmptyString = (data: any) => {
  for (var key in data) {
    if (data[key] !== "") {
      return false;
    }
  }
  return true;
};

export const cleanURLForUserView = (
  text: string | null | undefined
): string => {
  if (!text) return "";
  return text.replaceAll(" ", "_").replace(/\W/g, "").replaceAll("_", "-");
};

export const formatNumbers = (
  n: number | undefined | null
): string | number => {
  if (!n) return 0;
  if (n < 1e3) return n;
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(2) + "K";
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(2) + "M";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(2) + "B";
  if (n >= 1e12) return +(n / 1e12).toFixed(2) + "T";
  return n;
};

export const formatDate = (dt: Date | undefined): string => {
  if (!dt) return "";
  dt = new Date(dt);
  return (
    dt.getDate() + " " + monthNames[dt.getMonth()] + ", " + dt.getFullYear()
  );
};

export function timeAgo(input: Date) {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat("en");
  const ranges: any = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  let key: any;
  for (key in ranges) {
    if (ranges[key] < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key];
      return formatter.format(Math.round(delta), key);
    }
  }
}

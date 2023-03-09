import { format, isAfter } from "date-fns";

export function formatDate(date: Date, formatStr: string) {
  return format(date, formatStr);
}

export function isDateAfter(date: Date, dateToCompare: Date) {
  return isAfter(date, dateToCompare);
}

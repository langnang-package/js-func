import { date_get_timestamp } from "./date_get_timestamp";

export const date_next = (date: Date, interval: string) => { }

export const date_next_millisecond = (date: Date, n = 1) => new Date(date_get_timestamp(date) + n * 1);

export const date_next_second = (date: Date, n = 1) =>
  new Date(date_get_timestamp(date) + n * 1000);

export const date_next_minute = (date: Date, n = 1) =>
  new Date(date_get_timestamp(date) + n * 60 * 1000);

export const date_next_hour = (date: Date, n = 1) =>
  new Date(date_get_timestamp(date) + n * 60 * 60 * 1000);

export const date_next_day = (date: Date, n = 1) =>
  new Date(date_get_timestamp(date) + n * 24 * 60 * 60 * 1000);

export const date_next_month = (date = new Date(), n = 1) => {
  date = new Date(date);
  let year = date.getFullYear();
  let month: number = date.getMonth();
  month += n;
  if (month > 11) {
    year += Math.floor(month / 12);
    date.setFullYear(year);
    month = month % 12;
  }
  date.setMonth(month);
  return date;
};

export const date_next_year = (date: Date, n = 1) => {
  date = new Date(date);
  let year = date.getFullYear();
  year += n;
  date.setFullYear(year);
  return date;
};

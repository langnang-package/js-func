import { date_get_day } from "./date_get_day";
import { date_get_month } from "./date_get_month";
import { date_get_year } from "./date_get_year";
import { is_leap_year } from "./is_leap_year";
import { is_solar_month } from "./is_solar_month";

export const date_get_day_of_year = (date: Date): number => {
  let month = date_get_month(date);
  let day = date_get_day(date);
  console.log(month, day)
  month--;
  while (month > 0) {
    if (month == 1) {
      if (is_leap_year(date)) day += 28;
      else day += 29;
    } else if (is_solar_month(new Date(date_get_year(date), month))) {
      day += 31;
    } else {
      day += 30;
    }
    console.log(month, day)
    month--;
  }
  return day;
};
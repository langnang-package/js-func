import { date_get_century } from "./date_get_century";
import { date_get_day } from "./date_get_day";
import { date_get_day_of_week } from "./date_get_day_of_week";
import { date_get_day_of_year } from "./date_get_day_of_year";
import { date_get_decade } from "./date_get_decade";
import { date_get_hour } from "./date_get_hour";
import { date_get_millisecond } from "./date_get_millisecond";
import { date_get_minute } from "./date_get_minute";
import { date_get_month } from "./date_get_month";
import { date_get_season } from "./date_get_season";
import { date_get_second } from "./date_get_second";
import { date_get_timestamp } from "./date_get_timestamp";
import { date_get_week } from "./date_get_week";
import { date_get_week_of_year } from "./date_get_week_of_year";
import { date_get_year } from "./date_get_year";

export const date_set = (date: Date, interval: string = null) => {
  if (!date_set[interval.toLocaleLowerCase()]) return date;

  return date_set[interval.toLocaleLowerCase()](date);
}
date_set.timestamp = date_get_timestamp;
date_set.millisecond = date_get_millisecond;
date_set.second = date_get_second;
date_set.minute = date_get_minute;
date_set.hour = date_get_hour;
date_set.day = date_get_day;
date_set.day_of_week = date_get_day_of_week;
date_set.day_of_year = date_get_day_of_year;
date_set.week = date_get_week;
date_set.week_of_year = date_get_week_of_year;
date_set.month = date_get_month;
date_set.season = date_get_season;
date_set.year = date_get_year;
date_set.decade = date_get_decade;
date_set.century = date_get_century;

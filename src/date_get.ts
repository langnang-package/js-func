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

/**
 * @name date_get
 * @description 获取 `Date` 对象的指定时间
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的 `Date` 对象
 * @param {String} interval 
 * @returns 指定时间
 */
export const date_get = (date: Date, interval: string = null) => {
  if (!date_get[interval.toLocaleLowerCase()]) return date;

  return date_get[interval.toLocaleLowerCase()](date);
}

date_get.timestamp = date_get_timestamp;
date_get.millisecond = date_get_millisecond;
date_get.second = date_get_second;
date_get.minute = date_get_minute;
date_get.hour = date_get_hour;
date_get.day = date_get_day;
date_get.day_of_week = date_get_day_of_week;
date_get.day_of_year = date_get_day_of_year;
date_get.week = date_get_week;
date_get.week_of_year = date_get_week_of_year;
date_get.month = date_get_month;
date_get.season = date_get_season;
date_get.year = date_get_year;
date_get.decade = date_get_decade;
date_get.century = date_get_century;
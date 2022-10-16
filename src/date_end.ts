import { deep_copy } from "./deep_copy";
import { is_leap_year } from "./is_leap_year";
import { is_lunar_month } from "./is_lunar_month";
import { is_solar_month } from "./is_solar_month";

/**
 * @name date_end
 * @description 获取指定时间的结束时间
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的指定时间
 * @param {String} interval 时间间隔
 * @returns {Date} 获取的结束时间
 */
export const date_end = (date: Date, interval: string = "day"): Date => {
  if (!date_end[interval.toLocaleLowerCase()]) return date;

  return date_end[interval.toLocaleLowerCase()](date);
}

export const date_end_of_millisecond = date_end.millisecond = (date: Date): Date => {
  date = deep_copy(date);
  date.setMilliseconds(999);
  return date;
}

export const date_end_of_second = date_end.second = (date: Date): Date => {
  date = date_end_of_millisecond(date);
  date.setSeconds(59);
  return date;
}

export const date_end_of_minute = date_end.minute = (date: Date): Date => {
  date = date_end_of_second(date);
  date.setMinutes(59);
  return date;
}
export const date_end_of_hour = date_end.hour = (date: Date): Date => {
  date = date_end_of_minute(date);
  date.setHours(23);
  return date;
}

export const date_end_of_day = date_end.day = (date: Date): Date => {
  date = date_end_of_hour(date);
  if (is_solar_month(date)) {
    date.setDate(31);
  } else if (is_lunar_month(date)) {
    date.setDate(30);
  } else if (is_leap_year(date)) {
    date.setDate(28);
  } else {
    date.setDate(29);
  }
  return date;
}

// TODO
export const date_end_of_week = date_end.week = (date: Date, week_day: number = 7): Date => {
  return date;
}

export const date_end_of_month = date_end.month = (date: Date): Date => {
  date = date_end_of_day(date);
  date.setMonth(11);
  return date;
}
// TODO
export const date_end_of_season = date_end.season = (date: Date): Date => {
  date = date_end_of_day(date);
  date.setMonth(date.getMonth() - ((date.getMonth() + 1) % 3));
  return date;
}

export const date_end_of_year = date_end.year = (date: Date): Date => {
  date = date_end_of_month(date);
  return date;
}
import { array_foreach } from "./array_foreach";
import { deep_copy } from "./deep_copy";
import { _in_date_interval, _date_interval_keys } from "./_in_date_interval";

/**
 * @name date_start
 * @description 获取指定时间的开始时间
 * @category Date
 * @since 0.0.2 
 * @param {Date} date 需要处理的指定时间
 * @param {String} interval 时间间隔
 * @returns {Date} 获取的开始时间
 */
export const date_start = (date: Date, interval: string = "day"): Date => {
  if (!_in_date_interval(interval)) return date;

  return eval(`date_start_of_${interval.toLocaleLowerCase()}(date)`);
}


export const date_start_of_millisecond = date_start.millisecond = (date: Date): Date => {
  date = deep_copy(date);
  date.setMilliseconds(0);
  return date;
}

export const date_start_of_second = (date: Date): Date => {
  date = date_start_of_millisecond(date);
  date.setSeconds(0);
  return date;
}

export const date_start_of_minute = (date: Date): Date => {
  date = date_start_of_second(date);
  date.setMinutes(0);
  return date;
}
export const date_start_of_hour = (date: Date): Date => {
  date = date_start_of_minute(date);
  date.setHours(0);
  return date;
}

export const date_start_of_day = (date: Date): Date => {
  date = date_start_of_hour(date);
  date.setDate(1);
  return date;
}
// TODO
export const date_start_of_week = (date: Date, week_day: number = 7): Date => {
  return date;
}

export const date_start_of_month = (date: Date): Date => {
  date = date_start_of_day(date);
  date.setMonth(0);
  return date;
}
// TODO
export const date_start_of_season = (date: Date): Date => {
  date = date_start_of_day(date);
  date.setMonth(date.getMonth() - ((date.getMonth() + 1) % 3));
  return date;
}

export const date_start_of_year = (date: Date): Date => {
  date = date_start_of_month(date);
  date.setFullYear(1970);
  return date;
}

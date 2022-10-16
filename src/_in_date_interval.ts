import { array_includes } from "./array_includes";
import { array_map } from "./array_map";

/**
 * @name _in_date_interval
 * @description 检测是否是符合的时间间隔，是则返回对应的间隔名称，不是则返回 `false`
 * @category Helper
 * @since 0.0.2
 * @param {String} interval 需要检测的时间间隔 
 * @returns {String|Boolean} 检测结果，是则返回对应的间隔名称，不是则返回 `false`
 */
export const _in_date_interval = (interval: string): boolean | string => {
  for (let key in _date_interval) {
    if (array_includes((_date_interval[key] || []), interval)) return key;
  }
  return false;
}

export const _date_interval: any = {
  "millisecond": ["millisecond", "msc"], // 毫秒
  "second": ["second", "ss", "s"],// 秒
  "minute": ["minute", "mm", "m"],// 分
  "hour": ["hour", "24hour", "24h", "HH", "H"],// 24时
  "12hour": ["12hour", "12h", "hh", "h"],// 12时
  "day": ["day", "dd", "d"],// 日
  "day_of_week": ["day_of_week", "dow"],// 一周中的第几天
  "day_of_year": ["day_of_year", "doy"],// 一年中的第几天
  "week": ["week", "WW", "W",],// 周
  "week_of_month": ["week_of_month", "ww", "w", "wom"],// 一月中的第几周
  "month": ["month", "MM", "M"],// 月
  "season": ["season", "SS", "S"],// 季
  "year": ["year", "YYYY", "YY"],// 年
  "decade": ["decade"],// 年代
  "century": ["century"], // 世纪
}

/**
 * 时间间隔函数模板

export const date_func_millisecond = date_func.millisecond  = (date: Date) => date;
export const date_func_second = date_func.second = (date: Date) => date;
export const date_func_minute = date_func.minute = (date: Date) => date;
export const date_func_hour = date_func.hour = (date: Date) => date;
export const date_func_12hour = date_func["12hour"] = (date: Date) => date;
export const date_func_day = date_func.day = (date: Date) => date;
export const date_func_day_of_week = date_func.day_of_week = (date: Date) => date;
export const date_func_day_of_year = date_func.day_of_year = (date: Date) => date;
export const date_func_week = date_func.week = (date: Date) => date;
export const date_func_week_of_year = date_func.week_of_year = (date: Date) => date;
export const date_func_month = date_func.month = (date: Date) => date;
export const date_func_season = date_func.season = (date: Date) => date;
export const date_func_year = date_func.year = (date: Date) => date;
export const date_func_decade = date_func.decade = (date: Date) => date;
export const date_func_century = date_func.century = (date: Date) => date;

*/
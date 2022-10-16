export const date_set = (date: Date, interval: string = null) => {
  if (!date_set[interval.toLocaleLowerCase()]) return date;

  return date_set[interval.toLocaleLowerCase()](date);
}

export const date_set_timestamp = date_set.timestamp = (date: Date, value: any) => date.setTime(value);
export const date_set_millisecond = date_set.millisecond = (date: Date, value: any) => date.setMilliseconds(value);
export const date_set_second = date_set.second = (date: Date, value: any) => date.setSeconds(value);
export const date_set_minute = date_set.minute = (date: Date, value: any) => date.setMinutes(value);
export const date_set_hour = date_set.hour = (date: Date, value: any) => date.setHours(value);
export const date_set_day = date_set.day = (date: Date, value: any) => date.setDate(value);
export const date_set_day_of_week = date_set.day_of_week = (date: Date, value: any) => {

};
export const date_set_day_of_year = date_set.day_of_year = (date: Date, value: any) => date;
export const date_set_week = date_set.week = (date: Date, value: any) => date;
export const date_set_week_of_year = date_set.week_of_year = (date: Date, value: any) => date;
export const date_set_month = date_set.month = (date: Date, value: any) => date.setMonth(value);
export const date_set_season = date_set.season = (date: Date, value: any) => date;
export const date_set_year = date_set.year = (date: Date, value: any) => date.setFullYear(value);
export const date_set_decade = date_set.decade = (date: Date, value: any) => date;
export const date_set_century = date_set.century = (date: Date, value: any) => date;
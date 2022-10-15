import { _in_date_interval } from "./_in_date_interval"

export const date_get = (date: Date, interval: string = null) => {
  if (!_in_date_interval(interval)) return date;
}


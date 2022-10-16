import { date_format, date_end } from '../main'

describe("date_end", () => {
  it("main", () => {
    const date = new Date();
    const end_date = "2022-12-31 23:59:59 999";
    expect(date_format(date_end(date, 'millisecond'), 'msc')).toEqual(end_date.slice(-3));
    expect(date_format(date_end(date, 'second'), 'ss msc')).toEqual(end_date.slice(-6));
    expect(date_format(date_end(date, 'minute'), 'mm:ss msc')).toEqual(end_date.slice(-9));
    expect(date_format(date_end(date, 'hour'), 'HH:mm:ss msc')).toEqual(end_date.slice(-12));
    expect(date_format(date_end(date, 'day'), 'DD HH:mm:ss msc')).toEqual(end_date.slice(-15));
    expect(date_format(date_end(date, 'month'), 'MM-DD HH:mm:ss msc')).toEqual(end_date.slice(-18));
    expect(date_format(date_end(date, 'year'))).toEqual(end_date);
  });
})
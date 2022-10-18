import { date_get_day_of_week } from '../main'

describe("date_get_day_of_week", () => {
  it("main", () => { });
  it("MDN", () => {
    var Xmas95 = new Date("December 25, 1995 23:15:30");
    var weekday = date_get_day_of_week(Xmas95);

    expect(weekday).toEqual(1);
  });
})
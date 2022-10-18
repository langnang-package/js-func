import { date_get_day } from '../main'

describe("date_get_day", () => {
  it("main", () => { });
  it("MDN", () => {
    var Xmas95 = new Date("December 25, 1995 23:15:00");
    var day = date_get_day(Xmas95);

    expect(day).toEqual(25);

  });
})
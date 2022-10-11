import { is_date } from '../main'

describe("is_date", () => {
  it("main", () => {
    expect(is_date(null)).toEqual(false);
    expect(is_date(undefined)).toEqual(false);
    expect(is_date([])).toEqual(false);
    expect(is_date({})).toEqual(false);
    expect(is_date("")).toEqual(false);
    expect(is_date(0)).toEqual(false);
    expect(is_date(NaN)).toEqual(false);
    expect(is_date(true)).toEqual(false);
    expect(is_date(new Date())).toEqual(true);
    expect(is_date(new RegExp(''))).toEqual(false);
  });
})
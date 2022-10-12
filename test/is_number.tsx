import { is_number } from '../main'

describe("is_number", () => {
  it("main", () => {
    expect(is_number(null)).toEqual(false);
    expect(is_number(undefined)).toEqual(false);
    expect(is_number([])).toEqual(false);
    expect(is_number({})).toEqual(false);
    expect(is_number("")).toEqual(false);
    expect(is_number(0)).toEqual(true);
    expect(is_number(NaN)).toEqual(true);
    expect(is_number(true)).toEqual(false);
    expect(is_number(new Date())).toEqual(false);
    expect(is_number(new RegExp(''))).toEqual(false);
  });
})
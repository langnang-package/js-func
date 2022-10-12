import { is_empty } from '../main'

describe("is_empty", () => {
  it("main", () => {
    expect(is_empty(null)).toEqual(true);
    expect(is_empty(undefined)).toEqual(true);
    expect(is_empty([])).toEqual(false);
    expect(is_empty({})).toEqual(false);
    expect(is_empty("")).toEqual(true);
    expect(is_empty(0)).toEqual(false);
    expect(is_empty(NaN)).toEqual(false);
    expect(is_empty(true)).toEqual(false);
    expect(is_empty(new Date())).toEqual(false);
    expect(is_empty(new RegExp(''))).toEqual(false);
  });
})
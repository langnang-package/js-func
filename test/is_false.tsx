import { is_false } from '../main'

describe("is_false", () => {
  it("main", () => {
    expect(is_false(null)).toEqual(false);
    expect(is_false(undefined)).toEqual(false);
    expect(is_false([])).toEqual(false);
    expect(is_false({})).toEqual(false);
    expect(is_false("")).toEqual(false);
    expect(is_false(0)).toEqual(false);
    expect(is_false(NaN)).toEqual(false);
    expect(is_false(true)).toEqual(false);
    expect(is_false(false)).toEqual(true);
    expect(is_false(new Date())).toEqual(false);
    expect(is_false(new RegExp(''))).toEqual(false);
  });
})
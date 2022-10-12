import { is_true } from '../main'

describe("is_true", () => {
  it("main", () => {
    expect(is_true(null)).toEqual(false);
    expect(is_true(undefined)).toEqual(false);
    expect(is_true([])).toEqual(false);
    expect(is_true({})).toEqual(false);
    expect(is_true("")).toEqual(false);
    expect(is_true(0)).toEqual(false);
    expect(is_true(NaN)).toEqual(false);
    expect(is_true(true)).toEqual(true);
    expect(is_true(false)).toEqual(false);
    expect(is_true(new Date())).toEqual(false);
    expect(is_true(new RegExp(''))).toEqual(false);
  });
})
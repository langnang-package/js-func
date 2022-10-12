import { is_defined } from '../main'

describe("is_defined", () => {
  it("main", () => {
    expect(is_defined(null)).toEqual(false);
    expect(is_defined(undefined)).toEqual(false);
    expect(is_defined([])).toEqual(true);
    expect(is_defined({})).toEqual(true);
    expect(is_defined("")).toEqual(true);
    expect(is_defined(0)).toEqual(true);
    expect(is_defined(NaN)).toEqual(true);
    expect(is_defined(true)).toEqual(true);
    expect(is_defined(new Date())).toEqual(true);
    expect(is_defined(new RegExp(''))).toEqual(true);
  });
})
import { is_function } from '../main'

describe("is_function", () => {
  it("main", () => {
    expect(is_function(null)).toEqual(false);
    expect(is_function(undefined)).toEqual(false);
    expect(is_function([])).toEqual(false);
    expect(is_function({})).toEqual(false);
    expect(is_function("")).toEqual(false);
    expect(is_function(0)).toEqual(false);
    expect(is_function(NaN)).toEqual(false);
    expect(is_function(true)).toEqual(false);
    expect(is_function(new Date())).toEqual(false);
    expect(is_function(new RegExp(''))).toEqual(false);
    expect(is_function(() => { })).toEqual(true);
  });
})
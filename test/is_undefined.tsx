import { is_undefined } from '../main'

describe("is_undefined", () => {
  it("main", () => {
    expect(is_undefined(null)).toEqual(false);
    expect(is_undefined(undefined)).toEqual(true);
    expect(is_undefined([])).toEqual(false);
    expect(is_undefined({})).toEqual(false);
    expect(is_undefined("")).toEqual(false);
    expect(is_undefined(0)).toEqual(false);
    expect(is_undefined(NaN)).toEqual(false);
    expect(is_undefined(true)).toEqual(false);
    expect(is_undefined(new Date())).toEqual(false);
    expect(is_undefined(new RegExp(''))).toEqual(false);
  });
})
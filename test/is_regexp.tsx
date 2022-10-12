import { is_regexp } from '../main'

describe("is_regexp", () => {
  it("main", () => {
    expect(is_regexp(null)).toEqual(false);
    expect(is_regexp(undefined)).toEqual(false);
    expect(is_regexp([])).toEqual(false);
    expect(is_regexp({})).toEqual(false);
    expect(is_regexp("")).toEqual(false);
    expect(is_regexp(0)).toEqual(false);
    expect(is_regexp(NaN)).toEqual(false);
    expect(is_regexp(true)).toEqual(false);
    expect(is_regexp(new Date())).toEqual(false);
    expect(is_regexp(new RegExp(''))).toEqual(true);
  });
})
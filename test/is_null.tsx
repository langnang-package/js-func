import { is_null } from '../main'

describe("is_null", () => {
  it("main", () => {
    expect(is_null(null)).toEqual(true);
    expect(is_null(undefined)).toEqual(false);
    expect(is_null([])).toEqual(false);
    expect(is_null({})).toEqual(false);
    expect(is_null("")).toEqual(false);
    expect(is_null(0)).toEqual(false);
    expect(is_null(NaN)).toEqual(false);
    expect(is_null(true)).toEqual(false);
    expect(is_null(new Date())).toEqual(false);
    expect(is_null(new RegExp(''))).toEqual(false);
  });
})
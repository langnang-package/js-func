import { is_boolean } from '../main'

describe("is_boolean", () => {
  it("main", () => {
    expect(is_boolean(null)).toEqual(false);
    expect(is_boolean(undefined)).toEqual(false);
    expect(is_boolean([])).toEqual(false);
    expect(is_boolean({})).toEqual(false);
    expect(is_boolean("")).toEqual(false);
    expect(is_boolean(0)).toEqual(false);
    expect(is_boolean(NaN)).toEqual(false);
    expect(is_boolean(true)).toEqual(true);
    expect(is_boolean(new Date())).toEqual(false);
    expect(is_boolean(new RegExp(''))).toEqual(false);
  });
})
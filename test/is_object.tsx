import { is_object } from '../main'

describe("is_object", () => {
  it("main", () => {
    expect(is_object(null)).toEqual(false);
    expect(is_object(undefined)).toEqual(false);
    expect(is_object([])).toEqual(false);
    expect(is_object({})).toEqual(true);
    expect(is_object("")).toEqual(false);
    expect(is_object(0)).toEqual(false);
    expect(is_object(NaN)).toEqual(false);
    expect(is_object(true)).toEqual(false);
    expect(is_object(new Date())).toEqual(false);
    expect(is_object(new RegExp(''))).toEqual(false);
  });
})
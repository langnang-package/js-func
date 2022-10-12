import { is_primitive } from '../main'

describe("is_primitive", () => {
  it("main", () => {
    expect(is_primitive(null)).toEqual(false);
    expect(is_primitive(undefined)).toEqual(false);
    expect(is_primitive([])).toEqual(false);
    expect(is_primitive({})).toEqual(false);
    expect(is_primitive("")).toEqual(true);
    expect(is_primitive(0)).toEqual(true);
    expect(is_primitive(NaN)).toEqual(true);
    expect(is_primitive(true)).toEqual(true);
    expect(is_primitive(new Date())).toEqual(false);
    expect(is_primitive(new RegExp(''))).toEqual(false);
  });
})
import { is_symbol } from '../main'

describe("is_symbol", () => {
  it("main", () => {
    expect(is_symbol(null)).toEqual(false);
    expect(is_symbol(undefined)).toEqual(false);
    expect(is_symbol([])).toEqual(false);
    expect(is_symbol({})).toEqual(false);
    expect(is_symbol("")).toEqual(false);
    expect(is_symbol(0)).toEqual(false);
    expect(is_symbol(NaN)).toEqual(false);
    expect(is_symbol(true)).toEqual(false);
    expect(is_symbol(Date())).toEqual(false);
    expect(is_symbol(RegExp(''))).toEqual(false);
    expect(is_symbol(Symbol())).toEqual(true);
  });
})
import { is_string } from "../main";

describe("is_string", () => {
  it('main', function () {
    expect(is_string(null)).toEqual(false);
    expect(is_string(undefined)).toEqual(false);
    expect(is_string([])).toEqual(false);
    expect(is_string({})).toEqual(false);
    expect(is_string("")).toEqual(true);
    expect(is_string(0)).toEqual(false);
    expect(is_string(NaN)).toEqual(false);
    expect(is_string(true)).toEqual(false);
    expect(is_string(new Date())).toEqual(false);
    expect(is_string(new RegExp(''))).toEqual(false);
  });
})
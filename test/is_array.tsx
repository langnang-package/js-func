import { is_array } from "../main";

describe("is_array", () => {
  it('main', function () {
    expect(is_array(null)).toEqual(false);
    expect(is_array(undefined)).toEqual(false);
    expect(is_array([])).toEqual(true);
    expect(is_array({})).toEqual(false);
    expect(is_array("")).toEqual(false);
    expect(is_array(0)).toEqual(false);
    expect(is_array(NaN)).toEqual(false);
    expect(is_array(true)).toEqual(false);
    expect(is_array(new Date())).toEqual(false);
    expect(is_array(new RegExp(''))).toEqual(false);
  });
})
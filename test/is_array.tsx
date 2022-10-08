import {is_array} from "../src/is_array";

describe("is_array", () => {
  it('main', function () {
    expect(is_array(0)).toBe(false)
    expect(is_array("")).toBe(false)
    expect(is_array(null)).toBe(false)
    expect(is_array(undefined)).toBe(false)
    expect(is_array({})).toBe(false)
    expect(is_array(new RegExp(''))).toBe(false)
    expect(is_array(Object())).toBe(false)
    expect(is_array(Number())).toBe(false)
    expect(is_array(String())).toBe(false)
    expect(is_array([])).toBe(true)
    expect(is_array(Array())).toBe(true)
  });
})
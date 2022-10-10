import { array_fill } from "../src/array_fill";

describe("array_fill", () => {
  it("MDN", () => {
    expect(array_fill([1, 2, 3], 4)).toEqual([4, 4, 4]);
    expect(array_fill([1, 2, 3], 4, 1)).toEqual([1, 4, 4]);
    expect(array_fill([1, 2, 3], 4, 1, 2)).toEqual([1, 4, 3]);
    expect(array_fill([1, 2, 3], 4, 1, 1)).toEqual([1, 2, 3]);
    expect(array_fill([1, 2, 3], 4, 3, 3)).toEqual([1, 2, 3]);
    // expect(array_fill([1, 2, 3], 4, -3, -2)).toEqual([4, 2, 3]);
    expect(array_fill([1, 2, 3], 4, NaN, NaN)).toEqual([1, 2, 3]);
    expect(array_fill([1, 2, 3], 4, 3, 5)).toEqual([1, 2, 3]);
  })

  it("Lodash", () => {
    expect(array_fill([1, 2, 3], "a")).toEqual(["a", "a", "a"]);
    expect(array_fill(Array(3), 2)).toEqual([2, 2, 2]);
    expect(array_fill([4, 6, 8, 10], "*", 1, 3)).toEqual([4, '*', '*', 10]);
  })
})

import { array_head } from '../main'

describe("array_head", () => {
  it("main", () => {
    expect(array_head([1, 2, 3], -1)).toEqual(1);
    expect(array_head([1, 2, 3], 0)).toEqual(1);
    expect(array_head([1, 2, 3], 1)).toEqual(1);
    expect(array_head([1, 2, 3], 2)).toEqual([1, 2]);
    expect(array_head([1, 2, 3], 3)).toEqual([1, 2, 3]);
  });
  it("MDN", () => { });
  it("Lodash", () => {
    expect(array_head([1, 2, 3])).toEqual(1);

    expect(array_head([])).toEqual(undefined);
  });
  it("Underscore", () => {
    expect(array_head([5, 4, 3, 2, 1])).toEqual(5);
  });
})
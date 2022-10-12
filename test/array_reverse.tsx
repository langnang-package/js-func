import { array_reverse } from '../main'

describe("array_reverse", () => {
  it("main", () => { });
  it("MDN: 颠倒数组中的元素", () => {
    const a = [1, 2, 3];

    expect(a).toEqual([1, 2, 3]);

    array_reverse(a);

    expect(a).toEqual([3, 2, 1]);

  });
  it("Lodash", () => {
    var array = [1, 2, 3];

    expect(array_reverse(array)).toEqual(array);

  });
  it("Underscore", () => { });
})
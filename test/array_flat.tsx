import { array_flat } from '../main'

describe("array_flat", () => {
  it("main", () => { });
  it("MDN: 扁平化嵌套数组", () => {
    expect(array_flat([1, 2, [3, 4]])).toEqual([1, 2, 3, 4])

    expect(array_flat([1, 2, [3, 4, [5, 6]]])).toEqual([1, 2, 3, 4, [5, 6]]);

    expect(array_flat([1, 2, [3, 4, [5, 6]]], 2)).toEqual([1, 2, 3, 4, 5, 6]);

    //使用 -1，可展开任意深度的嵌套数组
    expect(array_flat([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], -1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it("MDN: 扁平化与数组空项", () => {
    expect(array_flat([1, 2, , 4, 5])).toEqual([1, 2, 4, 5]);
  });
  it("Lodash: flatten", () => {
    expect(array_flat([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
  });
  it("Lodash: flattenDeep", () => {
    expect(array_flat([1, [2, [3, [4]], 5]], -1)).toEqual([1, 2, 3, 4, 5])
  });
  it("Lodash: flattenDepth", () => {
    expect(array_flat([1, [2, [3, [4]], 5]], 1)).toEqual([1, 2, [3, [4]], 5])

    expect(array_flat([1, [2, [3, [4]], 5]], 2)).toEqual([1, 2, 3, [4], 5])

  });
  it("Underscore", () => { });
})
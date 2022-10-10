import { array_includes } from '../main'

describe("array_includes", () => {
  it("main", () => { });
  it("MDN", () => {
    expect(array_includes([1, 2, 3], 2)).toEqual(true);

    expect(array_includes([1, 2, 3], 4)).toEqual(false);

    expect(array_includes([1, 2, 3], 3, 3)).toEqual(false);

    expect(array_includes([1, 2, 3], 3, -1)).toEqual(true);

    // expect(array_includes([1, 2, NaN], NaN)).toEqual(true);
  });
  it("MDN: fromIndex 大于等于数组长度", () => {
    var arr = ['a', 'b', 'c'];

    expect(array_includes(arr, 'c', 3)).toEqual(false);

    expect(array_includes(arr, 'c', 100)).toEqual(false);
  });
  it("MDN: 计算出的索引小于 0", () => {
    var arr = ['a', 'b', 'c'];

    expect(array_includes(arr, 'a', -100)).toEqual(true);
    expect(array_includes(arr, 'b', -100)).toEqual(true);
    expect(array_includes(arr, 'c', -100)).toEqual(true);
    expect(array_includes(arr, 'a', -2)).toEqual(false);
  });
  it("Lodash", () => {
    expect(array_includes([1, 2, 3], 1)).toEqual(true);

    expect(array_includes([1, 2, 3], 1, 2)).toEqual(false);

    // _.includes({ 'user': 'fred', 'age': 40 }, 'fred');
    // => true

    // _.includes('pebbles', 'eb');
    // => true
  });
  it("Underscore", () => {
    expect(array_includes([1, 2, 3], 3)).toEqual(true);
  });
})
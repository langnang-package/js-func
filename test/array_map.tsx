import { array_map } from '../main'

describe("array_map", () => {
  it("main", () => {

  });
  it("MDN: 求数组中每个元素的平方根", () => {
    const numbers = [1, 4, 9];

    expect(array_map(numbers, (num: any) => Math.sqrt(num))).toEqual([1, 2, 3]);

  });
  it("MDN: 使用 map 重新格式化数组中的对象", () => {
    const kvArray = [
      { key: 1, value: 10 },
      { key: 2, value: 20 },
      { key: 3, value: 30 },
    ];

    expect(array_map(kvArray, ({ key, value }: any) => ({ [key]: value }))).toEqual([{ 1: 10 }, { 2: 20 }, { 3: 30 }])

  });
  it("MDN: 使用一个包含一个参数的函数来映射一个数字数组", () => {
    const numbers = [1, 4, 9];

    expect(array_map(numbers, (num: any) => num * 2)).toEqual([2, 8, 18])

  });
  it("MDN: 映射包含 undefined 的数组", () => {
    const numbers = [1, 2, 3, 4];

    expect(array_map(numbers, (num: any, index: any) => {
      if (index < 3) {
        return num;
      }
    })).toEqual([1, 2, 3, undefined])

  });
  it("Lodash", () => {
    function square(n: number) {
      return n * n;
    }

    expect(array_map([4, 8], square)).toEqual([16, 64]);

    // array_map({ 'a': 4, 'b': 8 }, square);
    // => [16, 64] (iteration order is not guaranteed)

    var users = [
      { 'user': 'barney' },
      { 'user': 'fred' }
    ];

    // The `_.property` iteratee shorthand.
    // array_map(users, 'user');
    // => ['barney', 'fred']

  });
  it("Underscore", () => {
    expect(array_map([1, 2, 3], function (num: any) { return num * 3; })).toEqual([3, 6, 9]);

    // expect(array_map({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; })).toEqual([3, 6, 9]);

    expect(array_map([[1, 2], [3, 4]], (e: any) => e[0])).toEqual([1, 3]);

  });
})
import { array_every } from "../main";


describe("array_every", () => {
  it("main", () => { });
  it("MDN: 检测所有数组元素的大小", () => {
    function isBigEnough(element: any, index: number, array: any[]) {
      return element >= 10;
    }
    expect(array_every([12, 5, 8, 130, 44], isBigEnough)).toEqual(false);
    expect(array_every([12, 54, 18, 130, 44], isBigEnough)).toEqual(true);
  });
  it("Lodash", () => {
    expect(array_every([true, 1, null, 'yes'], Boolean)).toEqual(false);
    // => false

    var users = [
      { 'user': 'barney', 'age': 36, 'active': false },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];

    // The `_.matches` iteratee shorthand.
    // _.every(users, { 'user': 'barney', 'active': false });
    // => false

    // The `_.matchesProperty` iteratee shorthand.
    // _.every(users, ['active', false]);
    // => true

    // The `_.property` iteratee shorthand.
    // _.every(users, 'active');
    // => false

  });
  it("Underscore", () => {
    expect(array_every([2, 4, 5], function (num: any) { return num % 2 == 0; })).toEqual(false);
  });
})
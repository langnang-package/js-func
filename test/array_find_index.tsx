import { array_find_index } from '../main'

describe("array_find_index", () => {
  it("main", () => { });
  it("MDN: 查找数组中首个质数元素的索引", () => {
    function isPrime(element: any, index: number, array: any[]) {
      var start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }
    expect(array_find_index([4, 6, 8, 12], isPrime)).toEqual(-1);
    expect(array_find_index([4, 6, 7, 12], isPrime)).toEqual(2);
  });
  it("Lodash", () => {
    var users = [
      { 'user': 'barney', 'active': false },
      { 'user': 'fred', 'active': false },
      { 'user': 'pebbles', 'active': true }
    ];

    expect(array_find_index(users, function (o: any) { return o.user == 'barney'; })).toEqual(0);
    // => 0

    // The `_.matches` iteratee shorthand.
    // _.findIndex(users, { 'user': 'fred', 'active': false });
    // => 1

    // The `_.matchesProperty` iteratee shorthand.
    // _.findIndex(users, ['active', false]);
    // => 0

    // The `_.property` iteratee shorthand.
    // _.findIndex(users, 'active');
    // => 2
  });
})
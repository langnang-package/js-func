import { array_filter } from '../main'

describe("array_filter", () => {
  it("main", () => { });
  it("MDN: 筛选排除所有较小的值", () => {
    expect(array_filter([12, 5, 8, 130, 44], (value: any) => value > 10)).toEqual([12, 130, 44]);
  });
  it("MDN: 找出数组中所有的素数", () => {
    function isPrime(num: any) {
      for (let i = 2; num > i; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
    expect(array_filter([-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], isPrime)).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it("MDN: 过滤 JSON 中的无效条目", () => {
    const array = [
      { id: 15 },
      { id: -1 },
      { id: 0 },
      { id: 3 },
      { id: 12.2 },
      {},
      { id: null },
      { id: NaN },
      { id: 'undefined' },
    ];
    let invalidEntries = 0;
    function filterByID(item: any) {
      if (Number.isFinite(item.id) && item.id !== 0) {
        return true;
      }
      invalidEntries++;
      return false;
    }
    expect(array_filter(array, filterByID)).toEqual([{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]);
  });
  it("MDN: 在数组中搜索", () => {
    const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];
    function filterItems(array: any[], query: string) {
      return array_filter(array, (el: any) => el.toLowerCase().includes(query.toLowerCase()));
    }
    expect(filterItems(fruits, 'ap')).toEqual(['apple', 'grapes']);
    expect(filterItems(fruits, 'an')).toEqual(['banana', 'mango', 'orange']);
  });
  it("Lodash", () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false }
    ];
    expect(array_filter(users, function (o: any) { return !o.active; })).toEqual([{ 'user': 'fred', 'age': 40, 'active': false }])
    // => objects for ['fred']

    // The `_.matches` iteratee shorthand.
    // expect(array_filter(users, { 'age': 36, 'active': true })).toEqual([{ 'user': 'barney', 'age': 36, 'active': true }])
    // => objects for ['barney']

    // The `_.matchesProperty` iteratee shorthand.
    // array_filter(users, ['active', false]);
    // => objects for ['fred']

    // The `_.property` iteratee shorthand.
    // array_filter(users, 'active');
    // => objects for ['barney']
  });
  it("Underscore", () => {
    expect(array_filter([1, 2, 3, 4, 5, 6], function (num: any) { return num % 2 == 0; })).toEqual([2, 4, 6])
  });
})
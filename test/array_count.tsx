import { array_count } from '../main'

describe("array_count", () => {
  it("main", () => { });
  it("Lodash", () => {
    expect(array_count([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': 1, '6': 2 })

    // The `_.property` iteratee shorthand.
    // expect(array_count(['one', 'two', 'three'], 'length')).toEqual({ '3': 2, '5': 1 })
  });
  it("Underscore", () => {
    expect(array_count([1, 2, 3, 4, 5], function (num: any) {
      return num % 2 == 0 ? 'even' : 'odd';
    })).toEqual({ odd: 3, even: 2 });
  });
})
import { array_find } from "../main";

describe("array_find", () => {
  it("MDN: 用对象的属性查找数组里的对象", () => {
    const inventory = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 },
    ];

    function isCherries(fruit: any) {
      return fruit.name === "cherries";
    }
    expect(array_find(inventory, isCherries)).toEqual({ name: "cherries", quantity: 5, });
  });
  it("MDN: 使用箭头函数和解构赋值", () => {
    const inventory = [
      { name: "apples", quantity: 2 },
      { name: "bananas", quantity: 0 },
      { name: "cherries", quantity: 5 },
    ];
    expect(array_find(inventory, ({ name }: any) => name === "cherries")).toEqual({ name: "cherries", quantity: 5, });
  });
  it("MDN: 寻找数组中的第一个质数", () => {
    function isPrime(element: any, index: number, array: any[]) {
      let start = 2;
      while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
          return false;
        }
      }
      return element > 1;
    }
    expect(array_find([4, 6, 8, 12], isPrime)).toEqual(undefined);
    expect(array_find([4, 5, 8, 12], isPrime)).toEqual(5);

  });
  it("Lodash", () => {
    var users = [
      { 'user': 'barney', 'age': 36, 'active': true },
      { 'user': 'fred', 'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1, 'active': true }
    ];

    expect(array_find(users, function (o: any) { return o.age < 40; })).toEqual({ 'user': 'barney', 'age': 36, 'active': true });
    // => object for 'barney'

    // The `_.matches` iteratee shorthand.
    // _.find(users, { 'age': 1, 'active': true });
    // => object for 'pebbles'

    // The `_.matchesProperty` iteratee shorthand.
    // _.find(users, ['active', false]);
    // => object for 'fred'

    // The `_.property` iteratee shorthand.
    // _.find(users, 'active');
    // => object for 'barney'
  });
  it("Underscore", () => {
    expect(array_find([1, 2, 3, 4, 5, 6], function (num: any) { return num % 2 == 0; })).toEqual(2);
  });
});

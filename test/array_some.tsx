import { array_some } from '../main'

describe("array_some", () => {
  it("main", () => { });
  it("MDN", () => {
    const array = [1, 2, 3, 4, 5];

    // checks whether an element is even
    const even = (element: any) => element % 2 === 0;

    expect(array_some(array, even)).toEqual(true);

  });
  it("MDN: 测试数组元素的值", () => {
    function isBiggerThan10(element: any, index: any, array: any) {
      return element > 10;
    }

    expect(array_some([2, 5, 8, 1, 4], isBiggerThan10)).toEqual(false);  // false
    expect(array_some([12, 5, 8, 1, 4], isBiggerThan10)).toEqual(true); // true

  });
  it("MDN: 使用箭头函数测试数组元素的值", () => {
    expect(array_some([2, 5, 8, 1, 4], (x: any) => x > 10)).toEqual(false);  // false
    expect(array_some([12, 5, 8, 1, 4], (x: any) => x > 10)).toEqual(true); // true

  });
  it("MDN: 判断数组元素中是否存在某个值", () => {
    var fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr: any, val: any) {
      return array_some(arr, function (arrVal: any) {
        return val === arrVal;
      });
    }

    expect(checkAvailability(fruits, 'kela')).toEqual(false);   // false
    expect(checkAvailability(fruits, 'banana')).toEqual(true); // true

  });
  it("MDN: 使用箭头函数判断数组元素中是否存在某个值", () => {
    var fruits = ['apple', 'banana', 'mango', 'guava'];

    function checkAvailability(arr: any, val: any) {
      return array_some(arr, (arrVal: any) => val === arrVal);
    }

    expect(checkAvailability(fruits, 'kela')).toEqual(false);   // false
    expect(checkAvailability(fruits, 'banana')).toEqual(true); // true

  });
  it("MDN: 将任意值转换为布尔类型", () => {
    var TRUTHY_VALUES = [true, 'true', 1];

    function getBoolean(value: any) {
      'use strict';

      if (typeof value === 'string') {
        value = value.toLowerCase().trim();
      }

      return array_some(TRUTHY_VALUES, function (t: any) {
        return t === value;
      });
    }

    expect(getBoolean(false)).toEqual(false);   // false
    expect(getBoolean('false')).toEqual(false); // false
    expect(getBoolean(1)).toEqual(true);       // true
    expect(getBoolean('true')).toEqual(true);  // true

  });
  it("Lodash", () => {
    expect(array_some([null, 0, 'yes', false], Boolean)).toEqual(true);

    var users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'fred', 'active': false }
    ];

    // The `_.matches` iteratee shorthand.
    // _.some(users, { 'user': 'barney', 'active': false });
    // => false

    // The `_.matchesProperty` iteratee shorthand.
    // _.some(users, ['active', false]);
    // => true

    // The `_.property` iteratee shorthand.
    // _.some(users, 'active');
    // => true

  });
})
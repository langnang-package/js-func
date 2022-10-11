import { array_reduce_right, array_reduce, array_concat } from '../main'

describe("array_reduce_right", () => {
  it("main", () => { });
  it("MDN: 求一个数组中所有值的和", () => {
    var sum = array_reduce_right([0, 1, 2, 3], function (a: any, b: any) {
      return a + b;
    });

    expect(sum).toEqual(6);

  });
  it("MDN: 扁平化（flatten）一个二维数组", () => {
    var flattened = array_reduce_right([[0, 1], [2, 3], [4, 5]], function (a: any, b: any) {
      return array_concat(a, b);
    }, []);
    expect(flattened).toEqual([4, 5, 2, 3, 0, 1]);
  });
  it("MDN: 运行一个带有回调每个函数将其结果传给下一个的异步函数列表", () => {
    const waterfall = (...functions: any) => (callback: any, ...args: any) =>
      array_reduce_right(functions,
        (composition: any, fn: any) => (...results: any) => fn(composition, ...results),
        callback
      )(...args);

    const randInt = (max: any) => Math.floor(Math.random() * max)

    const add5 = (callback: any, x: any) => {
      setTimeout(callback, randInt(1000), x + 5);
    };
    const mult3 = (callback: any, x: any) => {
      setTimeout(callback, randInt(1000), x * 3);
    };
    const sub2 = (callback: any, x: any) => {
      setTimeout(callback, randInt(1000), x - 2);
    };
    const split = (callback: any, x: any) => {
      setTimeout(callback, randInt(1000), x, x);
    };
    const add = (callback: any, x: any, y: any) => {
      setTimeout(callback, randInt(1000), x + y);
    };
    const div4 = (callback: any, x: any) => {
      setTimeout(callback, randInt(1000), x / 4);
    };

    // const computation = waterfall(add5, mult3, sub2, split, add, div4);
    // computation(console.log, 5) // -> 14

    // same as:

    const computation2 = (input: any, callback: any) => {
      const f6 = (x: any) => div4(callback, x);
      const f5 = (x: any, y: any) => add(f6, x, y);
      const f4 = (x: any) => split(f5, x);
      const f3 = (x: any) => sub2(f4, x);
      const f2 = (x: any) => mult3(f3, x);
      add5(f2, input);
    }

  });
  it("MDN: 展示 reduce 与 reduceRight 之间的区别", () => {
    var a = ['1', '2', '3', '4', '5'];
    var left = array_reduce(a, function (prev: any, cur: any) { return prev + cur; }, '');
    var right = array_reduce_right(a, function (prev: any, cur: any) { return prev + cur; }, '');

    expect(left).toEqual("12345");

    expect(right).toEqual("54321");

  });
  it("Lodash", () => {
    var array = [[0, 1], [2, 3], [4, 5]];

    expect(array_reduce_right(array, function (flattened: any, other: any) {
      return array_concat(flattened, other);
    }, [])).toEqual([4, 5, 2, 3, 0, 1]);

  });
  it("Underscore", () => {
    var list = [[0, 1], [2, 3], [4, 5]];
    var flat = array_reduce_right(list, function (a: any, b: any) { return array_concat(a, b); }, []);

    expect(flat).toEqual([4, 5, 2, 3, 0, 1])
  });
})
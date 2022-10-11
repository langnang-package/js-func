import { array_reduce } from '../main'

describe("array_reduce", () => {
  it("main", () => { });
  it("MDN: 求数组所有值的和", () => {
    let sum = array_reduce([0, 1, 2, 3], function (previousValue: any, currentValue: any) {
      return previousValue + currentValue
    }, 0)

    expect(sum).toEqual(6);

  });
  it("MDN: 累加对象数组里的值", () => {
    let initialValue = 0
    let sum = array_reduce([{ x: 1 }, { x: 2 }, { x: 3 }], function (previousValue: any, currentValue: any) {
      return previousValue + currentValue.x
    }, initialValue)

    expect(sum).toEqual(6);


  });
  it("MDN: 将二维数组转化为一维", () => {
    let flattened = array_reduce([[0, 1], [2, 3], [4, 5]],
      function (previousValue: any, currentValue: any) {
        return previousValue.concat(currentValue)
      },
      []
    )
    expect(flattened).toEqual([0, 1, 2, 3, 4, 5]);

  });
  it("MDN: 计算数组中每个元素出现的次数", () => {
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

    let countedNames = array_reduce(names, function (allNames: any, name: any) {
      if (name in allNames) {
        allNames[name]++
      }
      else {
        allNames[name] = 1
      }
      return allNames
    }, {})

    expect(countedNames).toEqual({ 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 });

  });
  it("MDN: 按属性对 object 分类", () => {
    let people = [
      { name: 'Alice', age: 21 },
      { name: 'Max', age: 20 },
      { name: 'Jane', age: 20 }
    ];

    function groupBy(objectArray: any, property: any) {
      return array_reduce(objectArray, function (acc: any, obj: any) {
        let key = obj[property]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
    }

    let groupedPeople = groupBy(people, 'age')

    expect(groupedPeople).toEqual({
      20: [
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
      ],
      21: [{ name: 'Alice', age: 21 }]
    });

  });
  it("MDN: 使用扩展运算符和 initialValue 绑定包含在对象数组中的数组", () => {
    // friends - an array of objects
    // where object field "books" is a list of favorite books
    let friends = [{
      name: 'Anna',
      books: ['Bible', 'Harry Potter'],
      age: 21
    }, {
      name: 'Bob',
      books: ['War and peace', 'Romeo and Juliet'],
      age: 26
    }, {
      name: 'Alice',
      books: ['The Lord of the Rings', 'The Shining'],
      age: 18
    }]

    // allbooks - list which will contain all friends' books +
    // additional list contained in initialValue
    let allbooks = array_reduce(friends, function (previousValue: any, currentValue: any) {
      return [...previousValue, ...currentValue.books]
    }, ['Alphabet'])

    // allbooks = [
    //   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
    //   'Romeo and Juliet', 'The Lord of the Rings',
    //   'The Shining'
    // ]
    expect(allbooks).toEqual([
      'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
      'Romeo and Juliet', 'The Lord of the Rings',
      'The Shining'
    ]);
  });
  it("MDN: 数组去重", () => {
    let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
    let myArrayWithNoDuplicates = array_reduce(myArray, function (previousValue: any, currentValue: any) {
      if (previousValue.indexOf(currentValue) === -1) {
        previousValue.push(currentValue)
      }
      return previousValue
    }, [])

    expect(myArrayWithNoDuplicates).toEqual(['a', 'b', 'c', 'e', 'd']);
  });
  it("Lodash", () => {
    expect(array_reduce([1, 2], function (sum: any, n: any) {
      return sum + n;
    }, 0)).toEqual(3);
    // => 3

    // array_reduce({ 'a': 1, 'b': 2, 'c': 1 }, function (result, value, key) {
    //   (result[value] || (result[value] = [])).push(key);
    //   return result;
    // }, {});
    // => { '1': ['a', 'c'], '2': ['b'] } (无法保证遍历的顺序)
  });
  it("Underscore", () => {
    var sum = array_reduce([1, 2, 3], function (memo: any, num: any) { return memo + num; }, 0);

    expect(sum).toEqual(6);
  });
})
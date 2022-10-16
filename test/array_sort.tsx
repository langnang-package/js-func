import { array_sort } from '../main'

describe("array_sort", () => {
  it("main", () => { });
  it("MDN", () => {
    const months = ['March', 'Jan', 'Feb', 'Dec'];

    array_sort(months);
    expect(months).toEqual(["Dec", "Feb", "Jan", "March"]);

    const array1 = [1, 30, 4, 21, 100000];

    array_sort(array1);

    expect(array1).toEqual([1, 100000, 21, 30, 4]);

  });
  it("MDN: 创建、显示及排序数组", () => {
    var stringArray = ["Blue", "Humpback", "Beluga"];
    var numericStringArray = ["80", "9", "700"];
    var numberArray = [40, 1, 5, 200];
    var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

    function compareNumbers(a: any, b: any) {
      return a - b;
    }


    expect(array_sort([...stringArray])).toEqual([...stringArray].sort());

    expect(array_sort([...numberArray], compareNumbers)).toEqual([...numberArray].sort(compareNumbers));

    expect(array_sort([...numericStringArray], compareNumbers)).toEqual([...numericStringArray].sort(compareNumbers));

    expect(array_sort([...mixedNumericArray], compareNumbers)).toEqual([...mixedNumericArray].sort(compareNumbers));

  });
  it("MDN: 对非 ASCII 字符排序", () => {
    var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
    array_sort(items, function (a: any, b: any) {
      return a.localeCompare(b);
    });

    expect(items).toEqual(['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']);

  });
  it("MDN: 使用映射改善排序", () => {
    // 需要被排序的数组
    var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

    // 对需要排序的数字和位置的临时存储
    var mapped = list.map(function (el: any, i: any) {
      return { index: i, value: el.toLowerCase() };
    })

    // 按照多个值排序数组
    mapped.sort(function (a: any, b: any) {
      return +(a.value > b.value) || +(a.value === b.value) - 1;
    });

    // 根据索引得到排序的结果
    var result = mapped.map(function (el: any) {
      return list[el.index];
    });

  });
})
import { array_index } from '../main'

describe("array_index", () => {
  it("main", () => { });
  it("MDN: 使用 indexOf()", () => {
    const array = [2, 9, 9];
    expect(array_index(array, 2)).toEqual(0);
    expect(array_index(array, 7)).toEqual(-1);
    expect(array_index(array, 9, 2)).toEqual(2);
    expect(array_index(array, 2, -1)).toEqual(-1);
    expect(array_index(array, 2, -3)).toEqual(0);
  });
  it("MDN: 找出指定元素出现的所有位置", () => {
    const indices: any[] = [];
    const array: any[] = ['a', 'b', 'a', 'c', 'a', 'd'];
    const element: any = 'a';
    let idx: number = array_index(array, element);
    while (idx !== -1) {
      indices.push(idx);
      idx = array_index(array, element, idx + 1);
    }
    expect(indices).toEqual([0, 2, 4]);
  });
  it("MDN: 判断一个元素是否在数组里，不在则更新数组", () => {
    function updateVegetablesCollection(veggies: any[], veggie: any) {
      if (array_index(veggies, veggie) === -1) {
        veggies.push(veggie);
        return `New veggies collection is: ${veggies}`;
      } else {
        return `${veggie} already exists in the veggies collection.`;
      }
    }
    const veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

    expect(updateVegetablesCollection(veggies, 'spinach')).toEqual('New veggies collection is: potato,tomato,chillies,green-pepper,spinach');
    expect(updateVegetablesCollection(veggies, 'spinach')).toEqual('spinach already exists in the veggies collection.');
    updateVegetablesCollection(veggies, 'spinach');
  });
  it("Lodash", () => {
    expect(array_index([1, 2, 1, 2], 2)).toEqual(1);

    // Search from the `fromIndex`.
    expect(array_index([1, 2, 1, 2], 2, 2)).toEqual(3);
  });
  it("Underscore", () => {
    expect(array_index([1, 2, 3], 2)).toEqual(1);
  });
})
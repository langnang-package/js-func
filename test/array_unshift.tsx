import { array_unshift } from '../main'

describe("array_unshift", () => {
  it("main", () => { });
  it("MDN", () => {
    const array1 = [1, 2, 3];

    expect(array_unshift(array1, 4, 5)).toEqual(5);

    expect(array1).toEqual([4, 5, 1, 2, 3]);

  });
  it("MDN: 使用 unshift()", () => {
    const arr = [1, 2];

    expect(array_unshift(arr, 0)).toEqual(3);
    expect(arr).toEqual([0, 1, 2]);

    expect(array_unshift(arr, -2, -1)).toEqual(5);
    expect(arr).toEqual([-2, -1, 0, 1, 2]);


    expect(array_unshift(arr, [-4, -3])).toEqual(6);
    expect(arr).toEqual([[-4, -3], -2, -1, 0, 1, 2]);

    expect(array_unshift(arr, [-7, -6], [-5])).toEqual(8);
    expect(arr).toEqual([[-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2]);

  });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
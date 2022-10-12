import { quick_sort } from '../main'

describe("quick_sort", () => {
  it("main", () => {
    const array = [1, 5, 3, 6, 4, 8, 2, 9, 7];

    expect(quick_sort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
})
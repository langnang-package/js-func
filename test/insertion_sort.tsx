import { insertion_sort } from '../main'

describe("insertion_sort", () => {
  it("main", () => {
    const array = [1, 5, 3, 6, 4, 8, 2, 9, 7];

    expect(insertion_sort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
})
import { heap_sort } from '../main'

describe("heap_sort", () => {
  it("main", () => {
    const array = [1, 5, 3, 6, 4, 8, 2, 9, 7];

    expect(heap_sort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
})
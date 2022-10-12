import { bucket_sort } from '../main'

describe("bucket_sort", () => {
  it("main", () => {
    const array = [1, 5, 3, 6, 4, 8, 2, 9, 7];

    expect(bucket_sort(array)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  });
})
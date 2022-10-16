import { array_duplicate } from '../main'

describe("array_duplicate", () => {
  it("main", () => {
    expect(array_duplicate([1, 1, 1, 1, 1, 3, 4, 5])).toEqual([1])
  });
})
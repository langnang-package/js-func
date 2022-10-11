import { array_offset } from '../main'

describe("array_offset", () => {
  it("main", () => {
    expect(array_offset([1, 2, 3, 4], 3)).toEqual([4, 1, 2, 3])
  });
})
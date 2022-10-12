import { array_rest } from '../main'

describe("array_rest", () => {
  it("main", () => {
    expect(array_rest([1, 2, 3, 4], 3)).toEqual([4])
  });
})
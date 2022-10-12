import { array_every_equal } from '../main'

describe("array_every_equal", () => {
  it("main", () => {
    expect(array_every_equal([1, 1, 1, 1, 1])).toEqual(true)
  });
})
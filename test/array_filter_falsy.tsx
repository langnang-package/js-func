import { array_filter_falsy } from '../main'

describe("array_filter_falsy", () => {
  it("main", () => {
    expect(array_filter_falsy([0, 1, '', undefined, null, NaN])).toEqual([1])
  });
})
import { array_foreach } from '../main'

describe("array_foreach", () => {
  it("main", () => {
    expect(array_foreach([1, 2, 3, 4, 5], (value: any) => value < 4)).toEqual(4)
  });
  it("MDN", () => { });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
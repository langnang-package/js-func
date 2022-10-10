import { array_keys } from '../main'

describe("array_keys", () => {
  it("main", () => { });
  it("MDN", () => {
    expect(array_keys(["a", , "c"])).toEqual([0, 1, 2]);
  });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
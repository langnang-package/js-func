import { each } from '../main'

describe("each", () => {
  it("main", () => {
    expect(each([1, 2, 3, 4, 5], (value: any) => value < 4)).toEqual("3")
  });
  it("Lodash", () => {
    each([1, 2], console.log);
    // => Logs `2` then `1`.
  })
  it("Undesrscore", () => {
    each([1, 2, 3], console.log);
    // => alerts each number in turn...
    each({ one: 1, two: 2, three: 3 }, console.log);
    // => alerts each number value in turn...
  })
})
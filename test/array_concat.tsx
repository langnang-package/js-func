import {array_concat} from "../src/array_concat";

describe("array_concat", () => {
  it("concat array", () => {
    expect(array_concat([], [1])).toEqual([1])
    expect(array_concat([], [1], [undefined])).toEqual([1, undefined])
    expect(array_concat([], [1], [undefined], [null])).toEqual([1, undefined, null])
    expect(array_concat([], [1], [undefined], [null, {}])).toEqual([1, undefined, null, {}])
  })
})
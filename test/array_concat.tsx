import { array_concat } from "../main";

describe("array_concat", () => {
  it("MDN: 连接两个数组", () => {
    expect(array_concat(['a', 'b', 'c'], [1, 2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3])
  })
  it("MDN: 连接三个数组", () => {
    expect(array_concat([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
  it("MDN: 将值连接到数组", () => {
    expect(array_concat(['a', 'b', 'c'], 1, [2, 3])).toEqual(['a', 'b', 'c', 1, 2, 3])
  })
  it("MDN: 合并嵌套数组", () => {
    expect(array_concat([[1]], [2, [3]])).toEqual([[1], 2, [3]])
  })
})

/**
 * @name array_offset
 * @description 将指定数量的元素移动到数组的末尾。
 * @tag Array 数组
 * @syntax array_offset(array, [length = 1]);
 * @param {Array} array 需要处理的数组。
 * @param {Number} [length = 1] 指定移动的元素个数。
 * @returns {Array} 移动后的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/values
 */
export const array_offset = (array: any[], length: number = 1) => [
  ...array.slice(length),
  ...array.slice(0, length),
];

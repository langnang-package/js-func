/**
 * @name array_fill
 * @description 用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @param {*} value 用来填充数组元素的值。
 * @param {Number} [start = 0] 起始索引，默认值为 0。
 * @param {Number} [end = array.length] 终止索引，默认值为 `array.length`。
 * @returns {Array} 返回填充修改后的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
 * @tutorial https://www.lodashjs.com/docs/lodash.fill
 */
export const array_fill = (array: any[], value: any, start: number = 0, end: number = array.length): any[] => {
  const result = [...array];
  end = end < array.length ? end : array.length;
  for (let i = start; i < end; i++) {
    result[i] = value;
  }
  return result;
};

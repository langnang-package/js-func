/**
 * @name array_reverse
 * @description 反转数组，将数组中元素的位置颠倒，并返回该数组。此方法更改原始数组。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @returns {Array} 反转后的数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 * @tutorial https://www.lodashjs.com/docs/lodash.reverse
 */
export const array_reverse = (array: any[]) => {
  let count: number = Math.floor(array.length / 2);
  for (let i = 0; i <= count - 1; i++) {
    [array[i], array[array.length - 1 - i]] = [array[array.length - 1 - i], array[i]];
  }
  return array;
};

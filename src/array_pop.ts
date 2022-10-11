/**
 * @name array_pop
 * @description 从数组中删除最后一个元素，并返回该元素的值。此方法更改原始数组。
 * @param {Array} array 需要处理的数组。
 * @returns {*} 从数组中删除的元素（当数组为空时返回undefined）。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 */
export const array_pop = (array: any[]) => {
  let value = array[array.length - 1];
  array.length = array.length - 1;
  return value;
};

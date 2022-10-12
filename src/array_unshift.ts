/**
 * @name array_unshift
 * @description 将一个或多个元素添加到数组的开头，并返回该数组的新长度。此方法更改原始数组。
 * @param {Array} array 需要处理的数组 
 * @param {...*} values 被添加到数组末尾的元素。
 * @returns {Number} 返回数组的长度
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift 
 */
export const array_unshift = (array: any[], ...values: any): number => {
  let merge_array = [...values, ...array];
  for (let i = 0; i < merge_array.length; i++) {
    array[i] = merge_array[i];
  }
  return array.length;
};

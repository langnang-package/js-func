/**
 * @name array_push
 * @description 将一个或多个元素添加到数组的末尾，并返回该数组的新长度。此方法更改原始数组。
 * @param {Array} array 需要处理的数组 
 * @param {...*} values 被添加到数组末尾的元素。
 * @returns {Number} 返回数组的长度
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push 
 */
export const array_push = (array: any[], ...values: any): number => {
  for (let i in values) {
    array[array.length] = values[i];
  }
  return array.length;
};

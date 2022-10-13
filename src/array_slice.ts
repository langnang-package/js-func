import { _from_index } from "./_form_index";
/**
 * @name array_slice
 * @description 裁剪数组，从 start 位置开始到 end 结束，但不包括 end 本身的位置。
 * @tag Array 数组
 * @syntax array_slice(array, [begin = 0], [end = array.length]);
 * @param {Array} array 需要处理的数组。
 * @param {Number} [begin = 0] 开始位置。
 * @param {Number} [end = array.length] 结束位置。
 * @returns {Array} 返回数组裁剪部分的新数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
 * @tutorial https://www.lodashjs.com/docs/lodash.slice
 */
export const array_slice = (array: any[], begin: number = 0, end: number = array.length) => {
  // 如果提取起始处索引为负数，则表示从原数组中倒数第几个元素开始提起
  if (begin < 0) {
    begin = array.length + begin;
  }
  // 如果 begin 大于原数组的长度，则会返回空数组
  if (begin > array.length - 1) {
    return [];
  }
  // 如果提取终止处索引为负数， 则它表示在原数组中的倒数第几个元素结束抽取。
  if (end < 0) {
    end = array.length + end;
  }
  // 如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。
  if (end > array.length) {
    end = array.length;
  }
  let _arr = [];
  let index = 0;
  while (end - begin > 0) {
    _arr[index] = array[begin];
    index++;
    begin++;
  }
  return _arr;
};

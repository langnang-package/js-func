import { _from_index } from "./_form_index";
import { array_slice } from "./array_slice";
import { array_push } from "./array_push";
/**
 * @name array_splice
 * @description 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {Number} [start = 0] 指定修改的开始位置（从 0 计数）。
 * @param {Number} [delete_count = array.length - start] 表示要移除的数组元素的个数。
 * @param {...*} values 要添加进数组的元素，从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
 * @returns 由被删除的元素组成的一个数组。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */
export const array_splice = (array: any[], start = 0, delete_count = array.length - start, ...values: any) => {
  start = _from_index(array.length, start);
  let delete_array: any[] = [];
  // 删除元素
  for (let i = 0; i < delete_count; i++) {
    array_push(delete_array, array[i + start]);
    delete (array[i + start]);
  }
  // 添加元素
  let rest_array = [...values, ...array_slice(array, start + delete_count)];
  for (let i = 0; i < rest_array.length; i++) {
    array[i + start] = rest_array[i];
  }
  return delete_array;
};

import { array_push } from "./array_push";
/**
 * @name array_keys
 * @description 返回一个包含数组中每个索引键的数组。
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @returns 一个新的数组对象。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/keys
 */
export const array_keys = (array: any[]) => {
  let result: any[] = [];
  for (let i: number = 0; i < array.length; i++) {
    array_push(result, i);
  }
  return result;
};

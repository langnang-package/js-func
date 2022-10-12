import { array_slice } from "./array_slice";

/**
 * @name array_rest
 * @description 返回数组中不包含前n个元素的其它元素
 * @param {Array} array 需要处理的数组。
 * @param {Number} n 不包含的元素个数。
 * @returns {Array} 处理后的数组。
 */
export const array_rest = (array: any[], n: number = 1): any[] => array_slice(array, n)
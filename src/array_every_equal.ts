import { array_every } from "./array_every";

/**
 * @name array_every_equal
 * @description 检测数组所有元素是否全等
 * @param {Array} array 需要检测的数组
 * @returns {Boolean} 检测结果
 */
export const array_every_equal = (array: any[]) => array_every(array, (val: any) => val === array[0])

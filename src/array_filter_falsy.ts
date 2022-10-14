import { array_filter } from "./array_filter";
/**
 * @name array_filter_falsy
 * @description 过滤数组中的虚假值
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @returns {Array} 返回一个新的过滤后的数组。
 */
export const array_filter_falsy = (array: any[]): any[] => array_filter(array, Boolean);

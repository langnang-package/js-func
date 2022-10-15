import { array_every } from "./array_every";

/**
 * @name array_none
 * @description 遍历数组，使用 `predicate` 断言函数检测数组内的所有元素是否都能通过测试。如果所有元素都不通过就返回 `true`，否则返回 `false` 。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} predicate(element, index, array)每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @returns {Boolean} 如果所有元素通过 `predicate` 断言函数检测后都返回真值，那么就返回 `false`，否则返回 `true` 。
 */
export const array_none = (array: any[], predicate: any) => !array_every(array, predicate)

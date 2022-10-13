import { array_every } from "./array_every";

/**
 * @name array_none
 * @description 遍历数组，使用 `predicate` 断言函数检测数组内的所有元素是否都能通过测试。如果所有元素都不通过就返回 `true`，否则返回 `false` 。
 * @tag Array 数组
 * @syntax array_none(array, predicate);
 * @param {Array} array 需要处理的数组。
 * @param {Function} predicate 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @param {*} this_arg 执行回调时用作 `this` 的对象。
 * @returns {Boolean} 如果所有元素通过 `predicate` 断言函数检测后都返回真值，那么就返回 `false`，否则返回 `true` 。
 */
export const array_none = (array: any[], predicate: any, this_arg: any = null) => !array_every(array, predicate(element, value, array), this_arg)

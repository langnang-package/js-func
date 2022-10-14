import { array_reduce } from "./array_reduce";

/**
 * @name sum
 * @description 求数值的总和
 * @tag Math 算术
 * @param {Array} nums 需要计算的数组 
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @return {Number} 计算的结果
 * @tutorial https://www.lodashjs.com/docs/lodash.sum
 * @tutorial https://www.lodashjs.com/docs/lodash.sumBy
 */
export const sum = (nums: any[], iteratee: any = null) => array_reduce(nums, (acc: number, val: any, ind: number, arr: any[]) => acc + (iteratee ? iteratee(val, ind, arr) : val), 0)



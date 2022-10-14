import { array_reduce } from "./array_reduce";

/**
 * @name sum
 * @description 计算数组中值的总和
 * @category Math 算术
 * @since 0.0.2 
 * @param {Array} nums 需要计算的数组 
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array} array 数组本身。
 * @returns{Number} 计算的结果
 * @tutorial https://www.lodashjs.com/docs/lodash.sum
 * @tutorial https://www.lodashjs.com/docs/lodash.sumBy
 */
export const sum = (nums: any[], iteratee: any = null): number => array_reduce(nums, (acc: number, val: any, ind: number, arr: any[]) => acc + (iteratee ? iteratee(val, ind, arr) : val), 0)



import { array_reduce } from "./array_reduce";

/**
 * @name max
 * @description 计算最大值
 * @category Math
 * @since 0.0.2
 * @param {...Number} nums 需要计算的数值
 * @returns{Number} 计算的结果
 */
export const max = (...nums: number[]): number => array_reduce(nums, (acc: number, val: number) => (acc > val ? acc : val), 0);
import { sum } from "./sum";

/**
 * @name avg
 * @description 计算平均值
 * @category Math
 * @since 0.0.2
 * @param {...Number} nums 需要计算的数值
 * @returns{Number} 计算的结果
 */
export const avg = (...nums: number[]) => sum(nums) / nums.length;
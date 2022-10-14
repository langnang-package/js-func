import { array_reduce } from "./array_reduce";

/**
 * @name min
 * @description 计算最小值
 * @category Math
 * @since 0.0.2
 * @param {...Number} nums 需要计算的数值
 * @return {Number} 计算的结果
 */
export const min = (...nums: number[]): number => array_reduce(nums, (acc: number, val: number) => (acc < val ? acc : val), 0);

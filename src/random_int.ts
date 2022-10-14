import { random } from "./random";

/**
 * @name random_int
 * @description 生成随机整数数值
 * @category Random
 * @since 0.0.1
 * @param {Number} [max = 1] 随机值最大范围，默认为1
 * @param {Number} [min = 0] 随机值最小范围，默认为1
 * @returns {Number} 随机整数数值
 */
export const random_int = (max: number = 1, min: number = 0): number => Math.floor(random(max, min));

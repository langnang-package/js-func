/**
 * @name random
 * @description 生成随机数值
 * @category Random
 * @since 0.0.1
 * @param {Number} [max = 1] 随机数值最大范围，默认为1
 * @param {Number} [min = 0] 随机数值最小范围，默认为1
 * @returns {Number} 随机数值
 */
export const random = (max: number = 1, min: number = 0): number => Math.random() * (max - min) + min;

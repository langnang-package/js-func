/**
 * @name is_divisible
 * @description 检测第一个数值是否可被第二个数值整除
 * @category Math
 * @since 0.0.2
 * @param {Number} dividend 被除数
 * @param {Number} divisor 除数
 * @returns {Boolean} 检测结果
 */
export const is_divisible = (dividend: number, divisor: number): boolean => dividend % divisor === 0;

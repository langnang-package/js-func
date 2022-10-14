/**
 * @name gcd
 * @description 欧几里得算法。计算两个非负整数的最大公约数。
 * @category Math 算术
 * @since 0.0.1
 * @param {Number} a 第一个非负整数
 * @param {Number} b 第二个非负整数
 * @returns {Number} 最大公约数
 */
export const gcd = (a: number, b: number): number => {
  const gcd_a = Math.abs(a);
  const gcd_b = Math.abs(b);
  return (gcd_b === 0) ? gcd_a : gcd(gcd_b, gcd_a % gcd_b);
}
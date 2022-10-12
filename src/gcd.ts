/**
 * @name gcd
 * @description 欧几里得算法。计算两个非负整数的最大公约数。
 * @tag Math 算术
 * @param {Number} a 第一个非负整数
 * @param {Number} b 第二个非负整数
 * @return {Number} 最大公约数
 */
export const gcd = (a: number, b: number): number => {
  const gcd_a = Math.abs(a);
  const gcd_b = Math.abs(b);
  return (gcd_b === 0) ? gcd_a : gcd(gcd_b, gcd_a % gcd_b);
}
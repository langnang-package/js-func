/**
 * @name factorial
 * @description 阶乘。一个正整数的阶乘（factorial）是所有小于及等于该数的正整数的积，并且0的阶乘为1。
 * @tag Math 算术
 * @param {Number} num 需要计算的数值
 * @return {Number} 计算的结果
 */
export const factorial = (num: number): number => num > 1 ? num * factorial(num - 1) : 1
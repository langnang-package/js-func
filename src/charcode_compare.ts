/**
 * @name charcode_compare
 * @description 比较两个元素的 Unicode 编码大小
 * @param {*} a 第一个元素
 * @param {*} b 第二个元素
 * @returns {Number} 返回比较结果。0：相等，1：a>b，-1：a<b;
 */
export const charcode_compare = (a: any, b: any, iteratee: any = null): number => {
  if (!iteratee) iteratee = charcode_compare_iteratee;
  return iteratee(a, b);
}
/**
 * *@name charcode_compare_iteratee
 * *@description 默认 `iteratee` 断言方法
 * *@param {*} a 第一个元素
 * *@param {*} b 第二个元素
 * *@param {Number} [index = 0] 比较字符所在元素的位置下标
 * *@returns {Number} 返回比较结果。0：相等，1：a>b，-1：a<b;
 */
export const charcode_compare_iteratee = (a: any, b: any, index: number = 0): number => {
  const result = String(a).charCodeAt(index) - String(b).charCodeAt(index);
  if (result === 0 && (String(a).charAt(index) || String(b).charAt(index))) {
    return charcode_compare_iteratee(a, b, index + 1);
  } else if (result > 0) {
    return 1;
  } else if (result < 0) {
    return -1;
  } else {
    return 0;
  }
}
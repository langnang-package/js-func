/**
 * @name random_string
 * @description 生成指定长度的随机字符串
 * @category Random
 * @since 0.0.2
 * @param {Number} length 生成的字符串长度
 * @returns {String} 随机字符串
 */

export const random_string = (length: number = 1): string => {
  const _a = "abcdefghijklmnopqrstuvwxyz";
  const _A = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const _0 = "0123456789";
  const str = _a + _A + _0;
  let result = "";
  while (length > 0) {
    result += str.charAt(Math.floor(Math.random() * length));
    length--;
  }
  return result;
}
/**
 * @name array_join
 * @description 将数组中的所有元素转换为由 `separator` 分隔的字符串。
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @param {String} [separator = ","] 分隔元素。
 * @returns {String} 所有数组元素连接的字符串。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 * @tutorial https://www.lodashjs.com/docs/lodash.join
 */
export const array_join = (array: any[], separator: string = ",") => {
  let result: string = "";
  for (let i: number = 0; i <= array.length - 1; i++) {
    result += array[i];
    if (i < array.length - 1) {
      result += separator;
    }
  }
  return result;
};

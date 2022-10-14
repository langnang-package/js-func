import { is_array } from './is_array'
/**
 * @name array_concat
 * @description 返回一个由当前数组和其它任何数组或值拼接而成的新数组。
 * @category Array 数组
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {...*} values 拼接的数组或值
 * @returns {Array} 拼接成的新数组
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 * @tutorial https://www.lodashjs.com/docs/lodash.concat
 */
export const array_concat = (array: any[], ...values: any): any[] => {
  let result = [...array];
  for (let i = 0; i <= values.length - 1; i++) {
    if (is_array(values[i])) {
      result = [...result, ...values[i]];
    } else {
      result = [...result, values[i]];
    }
  }
  return result;
};

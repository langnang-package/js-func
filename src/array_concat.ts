import { is_array } from './is_array'
/**
 * @name array_concat
 * @description
 * @param {Array} array 需要处理的数组
 * @param {...*} values 拼接的数组或值
 * @returns {Array} 拼接成的数组
 * @reference 
 */
export const array_concat = (array: any[], ...values: any) => {
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

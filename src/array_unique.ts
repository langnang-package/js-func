import { array_includes } from "./array_includes";
import { array_push } from "./array_push";

/**
 * @name array_unique
 * @description 返回数组的所有的不同元素值（去重）
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee
 * @returns {Array} 去重后的数组。
 * @tutorial https://www.lodashjs.com/docs/lodash.uniq
 * @tutorial https://www.lodashjs.com/docs/lodash.uniqBy
 * @tutorial https://www.lodashjs.com/docs/lodash.uniqWith
 * @tutorial https://underscorejs.net/#uniq
 */
export const array_unique = (array: any[], iteratee: any = null): any[] => {
  let iteratee_array: any[] = [],
    result: any[] = [];
  for (let i = 0; i < array.length; i++) {
    let value = iteratee ? iteratee(array[i]) : array[i];
    if (!array_includes(iteratee_array, value)) {
      array_push(iteratee_array, value);
      array_push(result, array[i]);
    }
  }
  return result;
}

export const array_unique_iteratee = (array: any[]): any[] => [...new Set(array)];

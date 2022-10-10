import { array_push } from "./array_push";
/**
 * @name array_filter
 * @description
 * @param {Array} array 
 * @param {Function} callback 
 * @param {*} thisArg 
 * @returns {Array}
 */
export const array_filter = (array: any[], callback: any, thisArg: any = null) => {
  let result: any[] = [];
  for (let key in array) {
    if (callback(array[key], key, array)) {
      array_push(result, array[key]);
    }
  }
  return result;
};

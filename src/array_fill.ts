/**
 * @name array_fill
 * @description 
 * @param {Array} array 
 * @param {*} value 
 * @param {Number} start 
 * @param {Number} end 
 * @returns {Array}
 */
export const array_fill = (array: any[], value: any, start: number = 0, end: number = array.length) => {
  const result = [...array];
  end = end < array.length ? end : array.length;
  for (let i = start; i < end; i++) {
    result[i] = value;
  }
  return result;
};

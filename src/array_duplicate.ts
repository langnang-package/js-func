/**
 * @name array_duplicate
 * @description 取重复值
 * @param {Array} array
 * @returns {Array}
 */

export const array_duplicate = (array: any[]): any[] => [
  ...new Set(
    array.reduce(
      (acc, val, index) =>
        array.indexOf(val, index + 1) >= 0 ? acc.concat(val) : acc,
      []
    )
  ),
];

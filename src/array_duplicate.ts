/**
 * @name array_duplicate
 * @description 返回数组中的重复值。
 * @tag Array 数组
 * @param {Array} array 需要处理的数组。
 * @returns {Array} 由重复值组成的新数组
 */

export const array_duplicate = (array: any[]): any[] => [
  ...new Set(
    array.reduce(
      (total, current_value, current_index) =>
        array.indexOf(current_value, current_index + 1) >= 0 ? total.concat(current_value) : total,
      []
    )
  ),
];

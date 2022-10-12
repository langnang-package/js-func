/**
 * @name _from_index
 * @description 根据条件界限及索引值返回正确的起始索引
 * @param {Number} limit 条件界限
 * @param {Number} start 索引值
 * @returns {Number} 正确的起始索引
 */
export const _from_index = (limit: number, start: number = 0) => {
  if (start == 0 || start < -limit) return 0;
  if (start > limit) return limit;
  if (start < 0) return limit + start;
  return start;
}
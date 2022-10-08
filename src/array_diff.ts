/**
 * 比较数组差异
 * @param {Array} 比较数组
 * @param {Array} 被比较数组
 * @returns {Array} 返回差异结果
 */
export const array_diff = (a1: any[], a2: any[]) => a1.reduce((t, v) => a2.includes[v] ? t : [...t, v], [])
/**
 * @name rgb_to_hex
 * @description rgb颜色转hex十六进制颜色
 * @since 0.0.2
 * @param {Number} r
 * @param {Number} g
 * @param {Number} b
 * @returns {string} 转换后的十六进制颜色
 */
export const rgb_to_hex = (r: number, g: number, b: number) =>
  "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

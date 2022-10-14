/**
 * @name hex_to_rgba
 * @description hex十六进制颜色转rgb颜色
 * @since 0.0.2
 * @param {String} hex 需要转换的十六进制颜色
 * @param {Number} [opacity = 1] 色彩透明度
 * @returns {string} 转换后的颜色
 */
export const hex_to_rgba = (hex: string, opacity: number = 1): string =>
  "rgba(" +
  parseInt("0x" + hex.slice(1, 3)) +
  "," +
  parseInt("0x" + hex.slice(3, 5)) +
  "," +
  parseInt("0x" + hex.slice(5, 7)) +
  "," +
  opacity +
  ")";

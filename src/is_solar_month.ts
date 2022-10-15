import { array_includes } from "./array_includes";

/**
 * @name is_solar_month
 * @description 检测 `date` 是否为大月
 * @since 0.0.2
 * @param {*} date 需要检测的 `date`
 * @returns {Boolean} 检测结果
 */
export const is_solar_month = (date: Date): Boolean => array_includes([0, 2, 4, 6, 7, 9, 11], date.getMonth());
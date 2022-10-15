import { array_includes } from "./array_includes";

/**
 * @name is_lunar_month
 * @description 检测 `date` 是否为小月
 * @since 0.0.2
 * @param {*} date 需要检测的 `date`
 * @returns {Boolean} 检测结果
 */
export const is_lunar_month = (date: Date): Boolean => array_includes([3, 5, 8, 10], date.getMonth());
import { is_null } from "./is_null";
import { is_undefined } from "./is_undefined";

/**
 * @name is_defined
 * @description 检测对象是否已定义
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_defined = (object: any): boolean => !is_null(object) && !is_undefined(object)

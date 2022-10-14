import { is_null } from "./is_null";
import { is_string } from "./is_string";
import { is_undefined } from "./is_undefined";

/**
 * @name is_empty
 * @description 检测对象是否为空
 * @since 0.0.1
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_empty = (object: any) =>
  is_null(object)
  || is_undefined(object)
  || (is_string(object) && object == '')

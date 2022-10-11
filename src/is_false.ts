import { is_boolean } from "./is_boolean";

/**
 * @name is_false
 * @description 检测对象是否为 `false`
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_false = (object: any): boolean => is_boolean(object) && object === false;

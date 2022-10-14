import { is_boolean } from "./is_boolean";

/**
 * @name is_true
 * @description 检测对象是否为 `true`
 * @since 0.0.1
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_true = (object: any) => is_boolean(object) && object === true;

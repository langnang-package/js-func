import { object_type } from "./object_type";

/**
 * @name is_dom
 * @description 检测对象是否 `DOM`
 * @since 0.0.1
 * @param {*} object
 * @returns {Boolean} 检测结果
 * TODO jest
 */
export const is_dom = (object: any) =>
  object_type(HTMLElement) === "object"
    ? object instanceof HTMLElement
    : object &&
    object_type(object) === "object" &&
    object.nodetypeOf === 1 &&
    object_type(object.nodeName) === "string";

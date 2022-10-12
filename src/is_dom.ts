import { object_type } from "./object_type";
/**
 * 检测DOM
 * @param {*} el
 */

// TODO
export const is_dom = (object: any) =>
  object_type(HTMLElement) === "object"
    ? object instanceof HTMLElement
    : object &&
    object_type(object) === "object" &&
    object.nodetypeOf === 1 &&
    object_type(object.nodeName) === "string";

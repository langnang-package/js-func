import { is_array } from "./is_array";
import { is_date } from "./is_date";

/**
 * @description 深拷贝
 * @param {*} object 需要处理的对象 
 * @returns {*} 拷贝后的数据
 */
export const deep_copy = (object: any): any => {
  if (typeof object !== 'object') return object;
  if (is_array(object)) return deep_copy_array(object);
  if (is_date(object)) return deep_copy_date(object);
}

export const deep_copy_array = (array: any[]): any[] => [...array];

export const deep_copy_date = (date: Date): Date => new Date(date);
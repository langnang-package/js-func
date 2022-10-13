/**
 * @name is_number
 * @description 检测对象是否为数值类型
 * @syntax ;
 * @param {*} object 需要检测的对象
 * @returns {Boolean} 检测结果
 */
export const is_number = (object: any): boolean => Object.prototype.toString.call(object) === "[object Number]" 

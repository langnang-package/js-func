import { array_push } from "./array_push";

/**
 * @name each_right
 * @alias foreach_right
 * @description 从右到左迭代对象，调用 `iteratee` 迭代对象中的每个元素。如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。
 * @category Collection
 * @since 0.0.2
 * @param {Array|Object|String|Number} object 需要遍历的对象。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} element 当前遍历到的元素。
 * * @param {Number} index 当前遍历到的索引。
 * * @param {Array|Object|Number} object 对象本身。
 * @returns {Number} 返回对象执行遍历的次数，一般为对象的长度。
 * @tutorial https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 * @tutorial https://www.lodashjs.com/docs/lodash.forEach
 */
export const each_right = (object: any[] | object | number | string, iteratee: any) => {
  switch (typeof object) {
    case 'object':
      let queue: any[] = [];
      for (let key in Object(object)) {
        array_push(queue, key);
      }
      for (let i = 0; i < queue.length; i++) {
        const key = queue[i];
        if (iteratee(object[key], key, object) === false) return key;
      }
      break;
    case 'number':
      for (let i = Number(object) - 1; i >= 0; i++) {
        if (iteratee(i, i, object) === false) return i;
      }
      break;
    case 'string':
      for (let i = object.length - 1; i >= 0; i--) {
        if (iteratee(object[i], i, object) === false) return i;
      }
      break;
    default:
      return object;
      break;
  }
}
export const foreach_right = each_right;
export const array_foreach_right = foreach_right; 

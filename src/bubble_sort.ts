/**
 * @name bubble_sort
 * @description 冒泡排序
 * @param {Array} array 需要处理的数组。
 * @param {Function} predicate 每次迭代调用的函数。
 * @returns 排序后的数组。
 * 
 */
// TODO
export const bubble_sort = (array: any[], iteratee: any = null): any[] => {
  // 冒泡：将比较数组内的最大值移至末尾

  let i = array.length;
  // 由于每次遍历将最大值移至末尾，因此逐渐减少比较长度
  while (i > 0) {
    bubble(array, i);
    i--;
  }
  return array;
};
const bubble = (array: any[], length: number) => {
  for (let i = 0; i < length - 1; i++) {
    // 比较相邻元素，检测是否需要交换位置
    if (array[i] > array[i + 1]) {
      // 交换元素位置
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
};
/**
 * 冒泡排序比较方法
 */
const bubble_sort_iteratee = () => { }
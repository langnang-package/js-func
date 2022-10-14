/**
 * @name bubble_sort
 * @description 冒泡排序。重复遍历比较相邻元素，将最大/小元素移至末尾，并逐渐减少遍历长度
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @tip 算法原理 tip 1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。\n2. 对每一对相邻元素做同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。\n3. 针对所有的元素重复以上的步骤，除了最后一个。\n4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。\n
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
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
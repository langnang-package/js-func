/**
 * @name insertion_sort
 * @description 插入排序。默认第一个元素为已排序,取未排序部分第一个元素,从后向前进行比较交换位置。
 * @category Array 数组
 * @category Algorithm 算法
 * @category Sorting 排序
 * @tip 算法原理 tip 1. 从第一个元素开始，该元素可以认为已经被排序；\n2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；\n3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；\n4. 重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；\n5. 将新元素插入到该位置后；\n6. 重复步骤 2~5。\n
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const insertion_sort = (array: any[]) => {
  const insertion = (array: any[], index: number) => {
    // 从后向前遍历
    for (let i = index - 1; i >= 0; i--) {
      // 如果后一个元素小于前一个元素
      if (array[i] > array[i + 1]) {
        // 交换元素位置
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      } else {
        // 停止循环
        break;
      }
    }
  }
  for (let i = 1; i < array.length; i++) {
    insertion(array, i);
  }
  return array;
}


/**
 * @name shell_sort
 * @description 希尔排序。置增量序列/因子,分割数组进行插入排序,直至增量因子为 1。
 * @category Array 数组
 * @category Algorithm 算法
 * @category Sorting 排序
 * @tip 算法原理 tip 1. 选择一个增量序列 t1，t2，…，tk，其中 ti>tj，tk=1；\n2. 按增量序列个数 k，对序列进行 k 趟排序；\n3. 每趟排序，根据对应的增量 ti，将待排序列分割成若干长度为 m 的子序列，分别对各子表进行直接插入排序。仅增量因子为 1 时，整个序列作为一个表来 处理，表长度即为整个序列的长度。\n
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const shell_sort = (array: any[]) => {
  const shell = (array: any[], gap: number) => {
    // 插入排序默认第一个元素为已排序,因此跳过gap长度
    for (let i = gap; i < array.length; i++) {
      // 从后向前插入排序
      for (var j = i - gap; j >= 0; j -= gap) {
        // 检测是否需要交换位置
        if (array[j] > array[j + gap]) {
          [array[j], array[j + gap]] = [array[j + gap], array[j]]
        } else {
          // 停止循环
          break;
        }
      }
    }
  }
  for (let gap = array.length / 2; gap > 0; gap = Math.floor(gap / 2)) {
    shell(array, gap);
  }
  return array;
}



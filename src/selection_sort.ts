/**
 * @name selection_sort
 * @description 选择排序。重复遍历未排序部分,将最小元素移至已排序末尾。
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @tip 算法原理 tip 1. 初始状态：无序区为 R[1..n]，有序区为空；\n2. 第 i 趟排序(i=1,2,3…n-1)开始时，当前有序区和无序区分别为 R[1..i-1]和 R(i..n）。该趟排序从当前无序区中-选出关键字最小的记录 R[k]，将它与无序区的第 1 个记录 R 交换，使 R[1..i]和 R[i+1..n)分别变为记录个数增加 1 个的新有序区和记录个数减少 1 个的新无序区；\n3. n-1 趟结束，数组有序化了。\n
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const selection_sort = (array: any[]) => {
  // 选择:将未排序部分中最小值移至已排序部分末尾
  const selection = (array: any[], start: number) => {
    // 取未排序首个元素位置
    let minIndex = start;
    // 遍历未排序部分
    for (let i = start + 1; i < array.length; i++) {
      // 寻找最小的数

      if (array[minIndex] > array[i]) {
        //将最小数的索引保存
        minIndex = i;
      }
    }
    // 交换元素位置
    [array[start], array[minIndex]] = [array[minIndex], array[start]];
  }
  for (let i = 0; i < array.length - 1; i++) {
    selection(array, i);
  }
  return array;
}

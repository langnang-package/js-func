/**
 * @name counting_sort
 * @description 计数排序。取最大值和最小值,统计元素出现次数,计数累加,反向填充输出。
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @tip 算法原理 tip 1. 找出待排序的数组中最大和最小的元素；\n2. 统计数组中每个值为 i 的元素出现的次数，存入数组 C 的第 i 项；\n3. 对所有的计数累加（从 C 中的第一个元素开始，每一项和前一项相加）；\n4. 反向填充目标数组：将每个元素 i 放在新数组的第 C(i)项，每放一个元素就将 C(i)减去 1。\n
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const counting_sort = (array: any[]): any[] => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  let B = Array();
  let countArray = Array();
  for (let i = 0; i < array.length; i++) {
    countArray[array[i]] = countArray[array[i]] ? countArray[array[i]] + 1 : 1;
  }
  for (var j = min; j < max; j++) {
    countArray[j + 1] = (countArray[j + 1] || 0) + (countArray[j] || 0);
  }
  for (var k = array.length - 1; k >= 0; k--) {
    B[countArray[array[k]] - 1] = array[k];
    countArray[array[k]]--;
  }
  return B;
}
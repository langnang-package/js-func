/**
 * @name quick_sort
 * @description 快速排序。根据基准值分割序列,左侧小于,右侧大于,递归执行后合并。
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @tip 算法原理 tip 1. 从数列中挑出一个元素，称为 “基准”（pivot）；\n2. 重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；\n3. 递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。\n
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const quick_sort = (array: any[]) => {
  // 引用传递
  let _array = array.slice(0);
  // 内存溢出
  if (_array.length <= 1) return _array;
  // 初始化基值，左侧（小于基值）数组，右侧（大于基值）数组
  let pivot: any[] = _array.splice(Math.floor(_array.length / 2), 1)[0],
    left: any[] = [],
    right: any[] = [];
  // 遍历比较每个元素值与基值，分类push至左右数组
  for (let i = 0; i < _array.length; i++) {
    _array[i] <= pivot ? left.push(_array[i]) : right.push(_array[i]);
  }
  // 递归
  let result: any[] = quick_sort(left).concat(pivot, ...quick_sort(right));
  return result;
}
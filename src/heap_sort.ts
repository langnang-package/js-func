/**
 * 算法原理
 * 1. 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
 * 2. 将堆顶元素 R[1]与最后一个元素 R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足 R[1,2…n-1]<=R[n]；
 * 3. 由于交换后新的堆顶 R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将 R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区 (Rn-1,Rn)。不断重复此过程直到有序区的元素个数为 n-1，则整个排序过程完成。
 */
/**
 * @name heap_sort
 * @description 堆排序。构建待排序序列成大项堆,交换堆顶元素与最后一个元素,调整新堆为大项堆。
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @param {Array} array 需要处理的数组。
 * @param {Function} iteratee 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const heap_sort = (array: any[]) => {
  buildMaxHeap(array);
  for (var i = array.length - 1; i > 0; i--) {
    // 堆顶元素与最后一项元素交换位置
    [array[0], array[i]] = [array[i], array[0]];
    // 调整新堆
    maxHeapify(array, 0, i);
  }
  return array;

}

function maxHeapify(array: any[], index: number, heapSize: number) {
  var iMax,
    iLeft,
    iRight;
  while (true) {
    iMax = index;
    iLeft = 2 * index + 1;
    iRight = 2 * (index + 1);
    // 如果有左子树,且左子树大于父节点,则将最大指针指向左子树
    if (iLeft < heapSize && array[index] < array[iLeft]) {
      iMax = iLeft;
    }
    // 如果有右子树,且右子树大于父节点,则将最大指针指向右子树
    if (iRight < heapSize && array[iMax] < array[iRight]) {
      iMax = iRight;
    }
    // 如果父节点不是最大值,则将父节点与最大值交换,并且递归调整与父节点交换的位置
    if (iMax != index) {
      [array[iMax], array[index]] = [array[index], array[iMax]];
      index = iMax;
    } else {
      break;
    }
  }
}

function buildMaxHeap(array: any[]) {
  // 从最后一个非叶子节点开始向上构造最大堆
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, i, array.length);
  }
}
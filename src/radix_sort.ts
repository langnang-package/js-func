/**
 * @name radix_sort
 * @description 基数排序。取最大值及其位数,取元素的每个位组成技术序列,进行计数排序。
 * @category Array 数组
 * @category Algorithm 算法
 * @category Sorting 排序
 * @tip 算法原理 tip 1. 取得数组中的最大数，并取得位数；\n2. array 为原始数组，从最低位开始取每个位组成 radix 数组；\n3. 对 radix 进行计数排序（利用计数排序适用于小范围数的特点）；\n
 * @since 0.0.1
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const radix_sort = (array: any[]) => {
  const maxDigit = (num: number, digit: number = 1) => {
    if (num <= -10 || num >= 10) {
      digit = maxDigit(num / 10, ++digit);
    }
    return digit;
  }
  let digit = maxDigit(Math.max(...array));
  var mod = 10;
  var dev = 1;
  var counter = [];
  for (var i = 0; i < digit; i++, dev *= 10, mod *= 10) {
    for (var j = 0; j < array.length; j++) {
      var bucket = Math.floor((array[j] % mod) / dev);
      if (counter[bucket] == null) {
        counter[bucket] = [];
      }
      counter[bucket].push(array[j]);
    }
    var pos = 0;
    for (var j = 0; j < counter.length; j++) {
      var value = null;
      if (counter[j] != null) {
        while ((value = counter[j].shift()) != null) {
          array[pos++] = value;
        }
      }
    }
  }
  return array;
}
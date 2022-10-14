/**
 * @name bucket_sort
 * @description 桶排序。设置桶范围,遍历数据至对应的桶中,对非空桶进行排序后拼接
 * @tag Array 数组
 * @tag Algorithm 算法
 * @tag Sorting 排序
 * @tip 算法原理 tip 1. 人为设置一个 BucketSize，作为每个桶所能放置多少个不同数值（例如当 BucketSize==5 时，该桶可以存放｛1,2,3,4,5｝这几种数字，但是容量不限，即可以存放 100 个 3）；\n2. 遍历输入数据，并且把数据一个一个放到对应的桶里去；\n3. 对每个不是空的桶进行排序，可以使用其它排序方法，也可以递归使用桶排序；\n4. 从不是空的桶里把排好序的数据拼接起来。\n
 * @param {Array} array 需要处理的数组。
 * @param {*} iteratee(element, index, array) 每次迭代调用的函数。
 * * @param {*} a 第一个用于比较的元素。
 * * @param {*} b 第二个用于比较的元素。
 * @returns {Array} 排序后的数组。
 */
export const bucket_sort = (array: any[]): any[] => {
  // 声明一个空桶, 将数据压入桶中
  const bucket = new Array(Math.max(...array) + 1);
  bucket.fill(0);
  array.forEach((one) => {
    bucket[one]++
  });
  // 声明一个新数组, 当做排序后的数组
  const newArr: any[] = []
  bucket.forEach((one, index) => {
    for (let i = 0; i < one; i++) {
      newArr.push(index)
    }
  })

  return newArr;
}
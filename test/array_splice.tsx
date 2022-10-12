import { array_splice } from '../main'

describe("array_splice", () => {
  it("main", () => { });
  it("MDN", () => {
    const months = ['Jan', 'March', 'April', 'June'];
    array_splice(months, 1, 0, 'Feb');

    expect(months).toEqual(["Jan", "Feb", "March", "April", "June"]);

    array_splice(months, 4, 1, 'May');

    expect(months).toEqual(["Jan", "Feb", "March", "April", "May"]);

  });
  it("MDN: 从索引 2 的位置开始删除 0 个元素，插入“drum”", () => {
    var myFish = ["angel", "clown", "mandarin", "sturgeon"];

    expect([...myFish].splice(2, 0, 'drum')).toEqual(array_splice([...myFish], 2, 0, 'drum'));

  });
  it("MDN: 从索引 2 的位置开始删除 0 个元素，插入“drum”和 “guitar”", () => {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    expect([...myFish].splice(2, 0, 'drum', 'guitar')).toEqual(array_splice([...myFish], 2, 0, 'drum', 'guitar'));

  });
  it("MDN: 从索引 3 的位置开始删除 1 个元素", () => {
    var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];

    expect([...myFish].splice(3, 1)).toEqual(array_splice([...myFish], 3, 1));
  });
  it("MDN: 从索引 0 的位置开始删除 2 个元素，插入\"parrot\"、\"anemone\"和\"blue\"", () => {
    var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];

    expect([...myFish].splice(0, 2, 'parrot', 'anemone', 'blue')).toEqual(array_splice([...myFish], 0, 2, 'parrot', 'anemone', 'blue'));

  });
  it("MDN: 从索引 2 的位置开始删除 2 个元素", () => {
    var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];

    expect([...myFish].splice(myFish.length - 3, 2)).toEqual(array_splice([...myFish], myFish.length - 3, 2));
  });
  it("MDN: 从索引 -2 的位置开始删除 1 个元素", () => {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    expect([...myFish].splice(-2, 1)).toEqual(array_splice([...myFish], -2, 1));
  });
  it("MDN: 从索引 2 的位置开始删除所有元素", () => {
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    expect([...myFish].splice(2)).toEqual(array_splice([...myFish], 2));

  });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
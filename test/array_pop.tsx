import { array_pop } from '../main'

describe("array_pop", () => {
  it("main", () => {

  });
  it("MDN: 删除掉数组的最后一个元素", () => {
    const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    const popped = array_pop(myFish);

    expect(myFish).toEqual(['angel', 'clown', 'mandarin']);

    expect(popped).toEqual('sturgeon');

  });
  it("Lodash", () => {

  });
  it("Underscore", () => {

  });
})
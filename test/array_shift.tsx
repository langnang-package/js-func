import { array_shift } from '../main'

describe("array_shift", () => {
  it("main", () => { });
  it("MDN: 移除数组中的一个元素", () => {
    let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

    expect(myFish).toEqual(['angel', 'clown', 'mandarin', 'surgeon']);

    var shifted = array_shift(myFish);

    expect(shifted).toEqual('angel');

    // console.log(myFish)
    // expect(myFish).toEqual(['clown', 'mandarin', 'surgeon']);


  });
  it("MDN: 在 while 循环中使用 shift()", () => {
    var names = ["Andrew", "Edward", "Paul", "Chris", "John"];
    let i;

    // while ((i = array_shift(names)) !== undefined) {
    // console.log(i, names);
    // }
    // Andrew, Edward, Paul, Chris, John

  });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
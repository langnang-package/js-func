import { array_push } from '../main'

describe("array_push", () => {
  it("main", () => {

  });
  it("MDN: 添加元素到数组", () => {
    var sports = ["soccer", "baseball"];
    var total = sports.push("football", "swimming");

    expect(sports).toEqual(["soccer", "baseball", "football", "swimming"]);

    expect(total).toEqual(4);

  });
  it("MDN: 合并两个数组", () => {
    var vegetables = ['parsnip', 'potato'];
    var moreVegs = ['celery', 'beetroot'];

    array_push(vegetables, ...moreVegs);

    expect(vegetables).toEqual(['parsnip', 'potato', 'celery', 'beetroot']);

  });
  it("Lodash", () => {

  });
  it("Underscore", () => {

  });
})
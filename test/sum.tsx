import { sum } from '../main'

describe("sum", () => {
  it("main", () => { });
  it("MDN", () => { });
  it("Lodash.sum", () => {
    expect(sum([4, 2, 8, 6])).toEqual(20);
  });
  it("Lodash.sumBy", () => {
    var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];

    // _.sumBy(objects, function (o) { return o.n; });
    // => 20
    expect(sum(objects, function (o: any) { return o.n; })).toEqual(20);

    // The `_.property` iteratee shorthand.
    // _.sumBy(objects, 'n');
    // => 20
  });
  it("Underscore", () => { });
})
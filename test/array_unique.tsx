import { array_unique } from '../main'

describe("array_unique", () => {
  it("main", () => { });
  it("Lodash.uniq", () => {
    expect(array_unique([2, 1, 2])).toEqual([2, 1]);
  });
  it("Lodash.uniqBy", () => {
    expect(array_unique([2.1, 1.2, 2.3], Math.floor)).toEqual([2.1, 1.2]);

    // The `_.property` iteratee shorthand.
    // _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
    // => [{ 'x': 1 }, { 'x': 2 }]
  });
  it("Lodash.uniqWith", () => {
    var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];

    // _.uniqWith(objects, _.isEqual);
    // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
  });
  it("Underscore.uniq", () => {
    expect(array_unique([1, 2, 1, 4, 1, 3])).toEqual([1, 2, 4, 3]);
  });
})
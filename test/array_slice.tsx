import { array_slice } from '../main'

describe("array_slice", () => {
  it("main", () => { });
  it("MDN", () => {
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    expect(array_slice(animals, 2)).toEqual(["camel", "duck", "elephant"]);

    expect(array_slice(animals, 2, 4)).toEqual(["camel", "duck"]);

    expect(array_slice(animals, 1, 5)).toEqual(["bison", "camel", "duck", "elephant"]);

    expect(array_slice(animals, -2)).toEqual(["duck", "elephant"]);

    expect(array_slice(animals, 2, -1)).toEqual(["camel", "duck"]);

    expect(array_slice(animals,)).toEqual(["ant", "bison", "camel", "duck", "elephant"]);

  });
  it("MDN: 返回现有数组的一部分", () => {
    var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
    var citrus = array_slice(fruits, 1, 3);

    expect(fruits).toEqual(['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']);

    expect(citrus).toEqual(['Orange', 'Lemon']);

  });
  it("Lodash", () => { });
  it("Underscore", () => { });
})
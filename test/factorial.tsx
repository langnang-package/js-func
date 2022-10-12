import { factorial } from '../main'

describe("factorial", () => {
  it("main", () => {
    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(5)).toEqual(120);
    expect(factorial(7)).toEqual(5040);
    expect(factorial(10)).toEqual(3628800);
  });
})
import { gcd } from '../main'

describe("gcd", () => {
  it("main", () => {
    expect(gcd(1997, 615)).toEqual(1);
    expect(gcd(1232, 573)).toEqual(1);
    expect(gcd(6, 9)).toEqual(3);
  });
})
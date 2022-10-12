import { array_sorted } from '../main'

describe("array_sorted", () => {
  it("main", () => {
    expect(array_sorted(['March', 'Jan', 'Feb', 'Dec'])).toEqual(1);
    expect(array_sorted(['Dec', 'Feb', 'Jan', 'March'])).toEqual(-1);
    expect(array_sorted(['March', 'Feb', 'Jan', 'Dec'])).toEqual(0);
  });
})
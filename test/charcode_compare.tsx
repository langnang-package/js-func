import { charcode_compare } from '../main'

describe("charcode_compare", () => {
  it("main", () => {
    expect(charcode_compare(0, 1)).toEqual(-1);

    expect(charcode_compare(1, 0)).toEqual(1);

    expect(charcode_compare(1, 1)).toEqual(0);

    expect(charcode_compare("", "")).toEqual(0);
  });
})
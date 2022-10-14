import { random_string } from '../main'

describe("random_string", () => {
  it("main", () => {
    expect(random_string(10).length).toEqual(10)
  });
})
import {random_int} from "../src/random_int";

describe("random_int", () => {
  it('main', function () {
    expect(random_int(3)).toBeGreaterThanOrEqual(0);
    expect(random_int(3)).toBeLessThanOrEqual(3);
  });
})
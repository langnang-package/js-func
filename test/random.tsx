import {random} from "../src/random";

describe("random", () => {
  it('main', function () {
    expect(random(3)).toBeGreaterThanOrEqual(0);
    expect(random(3)).toBeLessThanOrEqual(3);
  });
})
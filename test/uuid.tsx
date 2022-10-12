import { uuid } from "../main";

describe("uuid", () => {
  it("uuid", () => {
    expect(uuid().length).toBe(36)
    expect(uuid()).not.toBe(uuid())
  })
})
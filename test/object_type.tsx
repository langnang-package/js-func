import { object_type } from '../main'

describe("object_type", () => {
  it("main", () => {
    expect(object_type(null)).toEqual('null');
    expect(object_type(undefined)).toEqual('undefined');
    expect(object_type([])).toEqual('array');
    expect(object_type({})).toEqual('object');
    expect(object_type("")).toEqual('string');
    expect(object_type(0)).toEqual('number');
    expect(object_type(NaN)).toEqual('number');
    expect(object_type(true)).toEqual('boolean');
    expect(object_type(new Date())).toEqual('date');
    expect(object_type(new RegExp(''))).toEqual('regexp');
  });
})
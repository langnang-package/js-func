import { array_join } from '../main'

describe("array_join", () => {
  it("main", () => { });
  it("MDN: 使用四种不同的分隔符连接数组元素", () => {
    var array = ['Wind', 'Rain', 'Fire'];

    expect(array_join(array)).toEqual("Wind,Rain,Fire");
    expect(array_join(array, ', ')).toEqual("Wind, Rain, Fire");
    expect(array_join(array, ' + ')).toEqual("Wind + Rain + Fire");
    expect(array_join(array, '')).toEqual("WindRainFire");
  });
  it("Lodash", () => {
    expect(array_join(['a', 'b', 'c'], '~')).toEqual('a~b~c');
  });
})
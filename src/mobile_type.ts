/**
 * @name object_type
 * @description 检测移动设备的终端类型
 * @returns {String} 设备的终端类型
 */
// TODO jest
export const mobile_type = () => {
  if (!window && !navigator) return undefined;
  const u = (window.navigator || navigator).userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1 // g
  if (isAndroid) return 'Android';

  const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isIOS) return 'IOS';


  return undefined;
}
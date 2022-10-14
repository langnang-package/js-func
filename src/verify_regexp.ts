/**
 * @name verify_regexp
 * @description 校验是否匹配正则表达式
 * @since 0.0.2
 * @param {String} string 需要校验的字符串 
 * @param {RegExp} regexp 校验的正则表达式
 * @returns {Boolean} 校验结果
 */
export const verify_regexp = (string: string, regexp: RegExp): boolean => regexp.test(string)
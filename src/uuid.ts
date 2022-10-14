/**
 * @name uuid
 * @description 生成随机通用唯一标识符（Universally Unique Identifier）
 * @since 0.0.1
 * @returns {String} 通用唯一标识符
 */
export const uuid = () =>
  "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) =>
    (c == "x"
      ? (Math.random() * 16) | 0
      : (Math.random() * 16) | (0 & 0x3) | 0x8
    ).toString(16)
  );

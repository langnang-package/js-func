/**
 * @name date_format
 * @description 对指定时间进行格式化
 * @category Date
 * @since 0.0.2
 * @param {Date} date 需要处理的指定时间
 * @param {String} format 格式化要求
 * @returns {String} 格式化转换后的时间字符串
 */
export const date_format = (date: Date, format: string = "YYYY-MM-DD HH:mm:ss msc"): string => {
  if (!format) return date.toString();

  format = format.replace(/YYYY|FullYear/, String(date.getFullYear()));
  format = format.replace(/YY|Year/, ("" + String(date.getFullYear()).slice(-2)));

  format = format.replace(/MM|Month/, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace("M", String(date.getMonth() + 1));

  // format = format.replace("WW", ("0" + weekofYear(date)).slice(-2));
  // format = format.replace("W", weekofYear(date));

  format = format.replace(/DD|Day/, ("0" + date.getDate()).slice(-2));
  format = format.replace("D", String(date.getDate()));

  // format = format.replace("dd", "0" + (date.getDay() == 0 ? 7 : date.getDay()));
  // format = format.replace("d", date.getDay() == 0 ? 7 : date.getDay());

  // 24小时制
  format = format.replace(/HH|Hour/, ("0" + date.getHours()).slice(-2));
  format = format.replace("H", String(date.getHours()));

  // 12小时制
  format = format.replace(
    /hh|hour/,
    date.getHours() < 12
      ? ("0" + date.getHours()).slice(-2)
      : ("0" + (date.getHours() - 12)).slice(-2)
  );
  format = format.replace(
    "h",
    String(date.getHours() < 11 ? date.getHours() : date.getHours() - 12)
  );

  format = format.replace(/msc|millisecond/, ("00" + date.getMilliseconds()).slice(-3));


  format = format.replace(/mm|minute/, ("0" + date.getMinutes()).slice(-2));
  format = format.replace("m", String(date.getMinutes()));

  format = format.replace(/ss|second/, ("0" + date.getSeconds()).slice(-2));
  format = format.replace("s", String(date.getSeconds()));


  return format;
};

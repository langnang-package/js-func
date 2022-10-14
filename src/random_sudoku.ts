import { random_int } from "./random_int";
// TODO

/**
 * @name random_sudoku
 * @description 生成随机九宫格数独
 * @since 0.0.1
 * @param {Array} items 九宫格元素数组
 * @returns {Array} 随机九宫格数独
 */
export const random_sudoku = (items: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]) => {
  let result: any[] = [];
  for (let i = 0; i < 9; i++) {
    let row = [...items];
    if (i >= 6) {
      row = row.slice(5).concat(row.slice(0)).slice(0, 9);
    } else if (i >= 3) {
      row = row.slice(7).concat(row.slice(0)).slice(0, 9);
    }
    result[i] = row.slice((i % 3) * 3).concat(row.slice(0, (i % 3) * 3));
  }
  let i = 0;
  while (i < random_int() * 10000) {
    let rc1: number = random_int(9);
    let rc2: number = rc1;
    switch (rc1 % 3) {
      case 0:
        rc2 = Math.random() > 0.5 ? rc1 + 1 : rc1 + 2;
        break;
      case 1:
        rc2 = Math.random() > 0.5 ? rc1 - 1 : rc1 + 1;
        break;
      case 2:
        rc2 = Math.random() > 0.5 ? rc1 - 1 : rc1 - 2;
        break;
      default:
        break;
    }
    if (Math.random() > 0.5) {
      [result[rc1], result[rc2]] = [result[rc2], result[rc1]];
    } else {
      for (let i = 0; i < 9; i++) {
        [result[i][rc1], result[i][rc2]] = [result[i][rc2], result[i][rc1]];
      }
    }
    i++;
  }
  return result;
};

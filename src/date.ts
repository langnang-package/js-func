import { is_string } from "./is_string";

export const date = (...values: any[]) => {
  if (is_string(values[0])) {
    const slices = String(values[0]).match(/\d+/g);
    let i = 0;
    while (i < slices.length) {

    }
  } else {
  }
}
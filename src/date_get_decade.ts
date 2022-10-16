import { date_get_year } from "./date_get_year";

export const date_get_decade = (date: Date): number => Math.floor(date_get_year(date) / 10) * 10;

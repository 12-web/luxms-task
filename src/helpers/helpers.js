import { MAX_CHART_HEIGHT, SEVERAL_CHART_HEIGHT } from "../utils/variables";

export const sum = (obj) =>
  Object.values(obj).reduce((acc, item) => (acc += item), 0);

export const setInitPos = (ratio) => {
  return MAX_CHART_HEIGHT - ratio * SEVERAL_CHART_HEIGHT - 9;
};

export const getMiddleHeight = (ratio) => ratio * SEVERAL_CHART_HEIGHT;

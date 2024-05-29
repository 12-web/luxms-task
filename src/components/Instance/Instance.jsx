import { getMiddleHeight } from "../../helpers/helpers";
import {
  INSTANCE_SPACE,
  INSTANCE_WIDTH,
  MAX_CHART_HEIGHT,
} from "../../utils/variables";
import { Component } from "../Component/Component";
import { Text } from "../Text/Text";

export const Instance = ({ data, position = 0, max = 1, caption }) => {
  const { db, front, back } = data;

  const frontHeight = getMiddleHeight(front / max) || 0;
  const backHeight = getMiddleHeight(back / max) || 0;
  const dbHeight = getMiddleHeight(db / max) || 0;

  const dbY = MAX_CHART_HEIGHT - dbHeight;
  const backY = dbY - backHeight;
  const frontY = backY - frontHeight;

  return (
    <g
      style={{
        transform: `translate(${
          position * INSTANCE_WIDTH + position * INSTANCE_SPACE
        }px, 0px)`,
      }}
    >
      <g clipPath="xywh(0px 0px 100% 100% round 10px 10px)">
        <Component y={frontY} addClass="front" height={frontHeight}>
          <Text x={INSTANCE_WIDTH / 2} y={frontY + frontHeight / 2 || 0}>
            {front}
          </Text>
        </Component>
        <Component y={backY} addClass="back" height={backHeight}>
          <Text x={INSTANCE_WIDTH / 2} y={backY + backHeight / 2 || 0}>
            {back}
          </Text>
        </Component>
        <Component y={dbY} addClass="db" height={dbHeight}>
          <Text x={INSTANCE_WIDTH / 2} y={dbY + dbHeight / 2 || 0}>
            {db}
          </Text>
        </Component>
      </g>

      <Text x={INSTANCE_WIDTH / 2} y={MAX_CHART_HEIGHT + 20} addClass="caption">
        {caption}
      </Text>
    </g>
  );
};

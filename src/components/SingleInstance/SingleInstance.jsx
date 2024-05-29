import { getMiddleHeight } from "../../helpers/helpers";
import { white, zeroColor } from "../../utils/colors";
import {
  INSTANCE_SPACE,
  INSTANCE_WIDTH,
  MAX_CHART_HEIGHT,
} from "../../utils/variables";
import { ComponentWithStripes } from "../ComponentWithStripes/ComponentWithStripes";
import { Text } from "../Text/Text";
import { TextWithWrap } from "../TextWithWrap/TextWithWrap";

export const SingleInstance = ({ height, position = 0, max = 1, caption }) => {
  const elHeight = getMiddleHeight(height / max) || 0;
  const y = MAX_CHART_HEIGHT - elHeight;

  return (
    <g
      style={{
        transform: `translate(${
          position * INSTANCE_WIDTH + position * INSTANCE_SPACE
        }px, 0px)`,
      }}
    >
      <g clipPath="xywh(0px 0px 100% 100% round 10px 10px)">
        <ComponentWithStripes y={y} height={elHeight} max={max}>
          <TextWithWrap
            type="rounded"
            bgColor={white}
            color={zeroColor}
            x={INSTANCE_WIDTH / 2}
            y={y + elHeight / 2}
          >
            {height}
          </TextWithWrap>
        </ComponentWithStripes>
      </g>
      <Text x={INSTANCE_WIDTH / 2} y={MAX_CHART_HEIGHT + 20} addClass="caption">
        {caption}
      </Text>
    </g>
  );
};

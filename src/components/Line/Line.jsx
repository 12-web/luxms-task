import { INSTANCE_SPACE, INSTANCE_WIDTH } from "../../utils/variables";
import { TextWithWrap } from "../TextWithWrap/TextWithWrap";
import { zeroColor } from "../../utils/colors";

import arrow from "../../assets/icons/arrow_bottom.svg";

export const Line = ({
  left = 0,
  right = 0,
  position = 1,
  number,
  endToSide = false,
  startFromSide = false,
}) => {
  const setShift = (isShift) => (isShift ? INSTANCE_WIDTH / 8 : 0);

  const start =
    INSTANCE_WIDTH / 2 +
    (position - 1) * (INSTANCE_SPACE + INSTANCE_WIDTH) +
    setShift(startFromSide);

  const end =
    position * INSTANCE_WIDTH +
    INSTANCE_SPACE * position +
    INSTANCE_WIDTH / 2 -
    setShift(endToSide);

  const addClass = number === 0 ? "zero" : number > 0 ? "positive" : "negative";

  return (
    <>
      <g>
        <defs>
          <marker
            id="arrow"
            refX="8"
            refY="4"
            markerWidth="15"
            markerHeight="8"
            orient="auto-start-reverse"
            preserveAspectRatio="xMidYMid"
            stroke="context-stroke"
            fill="none"
          >
            <polyline
              points="4,8 8,4 4,0 "
              stroke={zeroColor}
              strokeWidth="1"
              strokeDasharray="12 0"
              fill="none"
            />
          </marker>
        </defs>
        <line x1={start} x2={start} y1="0" y2={left} className="line" />
        <line y1="0" y2="0" x1={start} x2={end} className="line" />
        <line
          className="line"
          x1={end}
          x2={end}
          y2={right}
          y1="0"
          markerEnd="url(#arrow)"
        />
      </g>
      <TextWithWrap addClass={addClass} x={(start + end) / 2} y={0}>
        {number !== 0 && (
          <img
            src={arrow}
            aria-hidden="true"
            alt="Направление роста показателя"
            style={{
              transform: `rotate(${number > 0 ? 180 : 0}deg)`,
            }}
          />
        )}
        {number > 0 ? `+${number}` : number}
      </TextWithWrap>
    </>
  );
};

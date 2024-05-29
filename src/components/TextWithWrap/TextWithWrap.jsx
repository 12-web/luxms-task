import { useLayoutEffect, useState, useRef } from "react";
import { white } from "../../utils/colors";

import "./TextWithWrap.css";

export const TextWithWrap = ({
  color = white,
  bgColor,
  type = "round",
  children,
  addClass,
  x,
  y,
}) => {
  const [bgWidth, setBgWidth] = useState(0);

  const borderConfig = {
    round: "50px",
    rounded: "5px",
  };

  const textRef = useRef(null);

  useLayoutEffect(() => {
    setBgWidth(textRef.current?.offsetWidth || 0);
  }, [textRef.current?.offsetWidth]);

  return (
    <foreignObject x={x} y={y} height="0" width={bgWidth} overflow="visible">
      <div
        ref={textRef}
        width="100%"
        className={addClass}
        style={{
          backgroundColor: bgColor,
          color: color,
          display: "inline-block",
          borderRadius: borderConfig[type],
          overflow: "visible",
          transform: "translate(-50%, -50%)",
          height: "24",
        }}
      >
        <p className="text-with-wrap__text">{children}</p>
      </div>
    </foreignObject>
  );
};

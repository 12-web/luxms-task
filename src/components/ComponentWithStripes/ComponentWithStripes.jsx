import { frontColor, white } from "../../utils/colors";
import { Component } from "../Component/Component";

export const ComponentWithStripes = ({ height, y, children }) => {
  return (
    <>
      <defs>
        <pattern
          id="stripes"
          viewBox="0,0,8,8"
          width="16"
          height="16"
          patternUnits="userSpaceOnUse"
        >
          <polygon points="0,0 4,0 0,4" fill={white} />
          <polygon points="0,8 8,0 8,4 4,8" fill={white} />
          <polygon points="0,4 0,8 8,0 4,0" fill={frontColor} />
          <polygon points="4,8 8,8 8,4" fill={frontColor} />
        </pattern>
      </defs>
      <g clipPath="xywh(0px 0px 100% 100% round 10px 10px)">
        <Component y={y} height={height} fill="url(#stripes)">
          {children}
        </Component>
      </g>
    </>
  );
};

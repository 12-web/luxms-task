import "./Text.css";

export const Text = ({ x, y, children, addClass = "text" }) => {
  return (
    <text
      className={addClass}
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {children}
    </text>
  );
};

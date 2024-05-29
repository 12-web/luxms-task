import { INSTANCE_WIDTH } from "../../utils/variables";

export const Component = ({ y, addClass, height, children, ...props }) => {
  return (
    <>
      <rect
        className={addClass}
        y={y}
        width={INSTANCE_WIDTH}
        height={height}
        {...props}
      />
      {children}
    </>
  );
};

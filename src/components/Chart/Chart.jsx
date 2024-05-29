import { Instance } from "../../components/Instance/Instance";
import { Line } from "../../components/Line/Line";
import { SingleInstance } from "../../components/SingleInstance/SingleInstance";
import { setInitPos, sum } from "../../helpers/helpers";

export const Chart = ({ data, max }) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 100% 100%"
    >
      <g style={{ transform: `translate(50px, 50px)` }}>
        <Line
          position={1}
          left={setInitPos(sum(data.dev) / max) || 0}
          right={setInitPos(sum(data.test) / max) || 0}
          number={sum(data.test) - sum(data.dev)}
          endToSide={true}
        />
        <Line
          startFromSide={true}
          position={2}
          left={setInitPos(sum(data.test) / max) || 0}
          right={setInitPos(sum(data.prod) / max) || 0}
          number={sum(data.prod) - sum(data.test)}
        />
        <Instance max={max} data={data.dev} caption="dev" />
        <Instance max={max} data={data.test} position={1} caption="test" />
        <Instance max={max} data={data.prod} position={2} caption="prod" />
        <SingleInstance
          max={max}
          height={data.norm}
          position={3}
          caption="норматив"
        />
      </g>
    </svg>
  );
};

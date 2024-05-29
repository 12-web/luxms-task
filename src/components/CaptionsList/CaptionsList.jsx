import { backColor, dbColor, frontColor } from "../../utils/colors";

import "./CaptionsList.css";

export const CaptionsList = () => {
  const captions = [
    {
      color: frontColor,
      caption: "Клиентская часть",
    },
    {
      color: backColor,
      caption: "Серверная часть",
    },
    {
      color: dbColor,
      caption: "База данных",
    },
  ];
  return (
    <ul className="caption-list">
      {captions.map((cap, idx) => (
        <li key={idx} className="caption-list__item">
          <div
            className="caption-list__rect"
            style={{ backgroundColor: cap.color }}
          />
          <span className="caption">{cap.caption}</span>
        </li>
      ))}
    </ul>
  );
};

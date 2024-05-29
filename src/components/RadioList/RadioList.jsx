import { URLS } from "../../utils/variables";

import "./RadioList.css";

export const RadioList = ({ setCheckedUrl, checkedUrl }) => {
  const handleChange = ({ target }) => setCheckedUrl(target.value);

  return (
    <ul className="radio-list">
      {URLS.map((item, idx) => (
        <li key={idx}>
          <label className="radio-list__item">
            <input
              className="radio-list__input"
              onChange={handleChange}
              value={item.href}
              type="radio"
              name="urlRadio"
              checked={checkedUrl === item.href}
            />
            {item.name}
          </label>
        </li>
      ))}
    </ul>
  );
};

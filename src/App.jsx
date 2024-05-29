import { useEffect, useState } from "react";
import axios from "axios";
import { CaptionsList } from "./components/CaptionsList/CaptionsList";
import { sum } from "./helpers/helpers";
import { RadioList } from "./components/RadioList/RadioList";
import { URLS } from "./utils/variables";
import { Chart } from "./components/Chart/Chart";

import "./App.css";
import "./variables/variables.css";

function App() {
  const [datas, setDatas] = useState({
    title: "",
    dev: { front: 0, back: 0, db: 0 },
    test: { front: 0, back: 0, db: 0 },
    prod: { front: 0, back: 0, db: 0 },
    norm: 0,
  });
  const [max, setMax] = useState(0);
  const [checkedUrl, setCheckedUrl] = useState(URLS[0].href);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios(checkedUrl);

        setDatas(data);
        setMax(Math.max(sum(data.dev), sum(data.test), sum(data.prod)));
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, [checkedUrl]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Количество пройденных тестов "{datas.title}"</h1>
        <div className="inner-container">
          {max !== 0 ? (
            <Chart data={datas} max={max} />
          ) : (
            <p className="caption">Данные отсутствуют</p>
          )}
        </div>
        <CaptionsList />
      </div>
      <RadioList
        setDatas={setDatas}
        setMax={setMax}
        setCheckedUrl={setCheckedUrl}
        checkedUrl={checkedUrl}
      />
    </div>
  );
}

export default App;

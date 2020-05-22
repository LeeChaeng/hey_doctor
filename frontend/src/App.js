import React, { useState, useEffect } from "react";
import { getHello } from "./api/hello";
import {} from "apexcharts";
import RChart from "./components/Chart";

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    getHello().then((res) => {
      setValue(res.data.Hello);
    });
  }, []);

  return (
    <div>
      {/* {value} 롸롸롸롸롸롸롸ㅘ */}
      <RChart />
    </div>
  );
}

export default App;

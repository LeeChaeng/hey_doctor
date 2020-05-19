import React, { useState, useEffect } from "react";
import { getHello } from "./api/hello";

function App() {
  const [value, setValue] = useState([]);

  useEffect(() => {
    getHello().then((res) => {
      setValue(res.data.Hello);
    });
  }, []);

  return <div>{value} 롸롸롸롸롸롸롸ㅘ</div>;
}

export default App;

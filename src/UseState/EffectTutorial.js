import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API WAS CALLED");
        console.log(response.data);
      });
  });

  return <div>Hello World {data}</div>;
};

export default EffectTutorial;


//Here the message will be logged 3 times because the component is re-rendered 3 times ( the third time is when the data is set using setData).
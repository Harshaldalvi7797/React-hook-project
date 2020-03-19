import React, { useState, useEffect } from "react";
import axios from "axios";

const Resources = props => {
  const [data, setData] = useState("");
  const FetchData = async resource => {
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setData(response.data);
  };

  useEffect(() => {
    FetchData(props.resource);
  }, [props.resource]);

  return (
    <div className="container">
      <div className="row">{data.length}</div>
    </div>
  );
};

export default Resources;

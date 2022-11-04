import React, { useEffect, useState } from "react";
import axios from "axios";
const [data, setData] = useState(null);

useEffect(() => {
  axios
    .get(`/${user}/sessions`)
    .then((res) => {
      setData(res);
    })
    .catch((err) => {
      console.error(err);
    });
});

console.log(data);
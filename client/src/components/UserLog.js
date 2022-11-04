import React, { useEffect, useState } from "react";
import axios from "axios";
const [data, setData] = useState(null);

const getData = async () => {
  await axios
    .get(`/${user}/sessions`)
    .then((res) => {
      setData(res);
    })
    .catch((err) => {
      console.error(err);
    });
};

useEffect(() => {
    getData();
})

console.log(data);

import { useEffect, useState } from "react";
// const { Client } = require("@notionhq/client");
import axios from "axios";

const newsUpdate = () => {
  const [notionData, setNotionData] = useState({});

  const loadUpdate = async () => {
    const { data } = await axios.get("/api/course/get-notion", {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data);
  };

  useEffect(() => {
    loadUpdate();
  }, []);

  return (
    <div>
      <h1>Notion page</h1>
      {/* <pre>{JSON.stringify(notionData, null, 4)}</pre> */}
    </div>
  );
};
export default newsUpdate;

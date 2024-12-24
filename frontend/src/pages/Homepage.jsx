import { GetApiCall } from "../utils/apiCall";
import { useState } from "react";

let [data, setData] = useState([]);
let [loading, setLoading] = useState(true);

const fetchData = async () => {
  const response = await GetApiCall("http://localhost:8000/api/user/").then(
    (data) => console.log(data)
  );
  setData(response);
  setLoading(false);
};

const Homepage = () => {
  return <div className="h-screen bg-slate-700">
    Homepage
    </div>;
};

export default Homepage;

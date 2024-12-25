import { GetApiCall } from "../utils/apiCall";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await GetApiCall("http://localhost:8000/api/user/");
      setData(response);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="h-screen bg-slate-700 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen bg-slate-700 flex items-center justify-center">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-700">
      <h1>Homepage</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Homepage;

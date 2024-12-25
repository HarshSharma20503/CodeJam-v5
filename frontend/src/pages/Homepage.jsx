import { GetApiCall } from "../utils/apiCall";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [courses, setCourses] = useState([]);

  const fetchData = async () => {
    try {
      const response = await GetApiCall("http://localhost:8000/api/user/");
      console.log("getUser response", response);
      setCourses(response.data.courses);
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
    <div className="h-full bg-slate-700">
      {/* Instructions Component Start */}
      {courses.length === 0 && (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
          <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden">
            <div className="flex items-center gap-4 p-4 bg-[#302b63] text-white border-b border-white/20">
              <i className="ri-arrow-left-line text-2xl cursor-pointer text-gray-400 transition-colors duration-300 hover:text-yellow-400"></i>
              <h1 className="text-xl font-semibold">Your Classrooms</h1>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="text-lg text-yellow-400 mb-6 p-4 bg-[#302b63]/30 border border-yellow-400/20 rounded-lg text-center">
                First time user? Read instructions to get started
              </div>
              <h1 className="text-2xl text-yellow-400 mb-6">Instructions:</h1>
              <ul className="flex flex-col gap-6">
                {[...Array(5).keys()].map((index) => (
                  <li
                    key={index}
                    className="flex items-start p-4 bg-[#302b63]/30 rounded-lg transition-transform duration-300 hover:translate-x-2 hover:bg-[#302b63]/50"
                  >
                    <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">
                      {index + 1}.
                    </span>
                    <span className="text-white text-base leading-6">
                      {
                        [
                          "Go to any of your course in the classroom",
                          "Scroll till the bottom and wait for every PDF to be loaded",
                          "Make sure you are authenticated, then click on the process button in the top right",
                          "Wait for the process to complete. You can change tabs but please don't close the browser",
                          "After completion, reload the extension to see your course on the homepage with all lectures and features",
                        ][index]
                      }
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Insrtuctions Component End */}

      {/* Classrooms Component Start */}
      {courses.length > 0 && (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
          <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden">
            {/* Header Section */}
            <div className="flex items-center gap-4 p-4 bg-[#302b63] text-white border-b border-white/20">
              <i className="ri-arrow-left-line text-lg cursor-pointer text-gray-300 transition-colors duration-300 hover:text-yellow-500"></i>
              <h1 className="text-lg font-semibold m-0">Your Classrooms</h1>
            </div>

            {/* Classroom List Section */}
            <div className="flex-1 p-5 overflow-y-auto space-y-5">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="h-12 flex items-center px-4 bg-[#302b63] rounded-lg text-white shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-[#bfad45] hover:text-black"
                >
                  {course.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* Classrooms Component ENd */}
    </div>
  );
};

export default Homepage;

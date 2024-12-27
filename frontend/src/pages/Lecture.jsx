import React, { useState, useContext, useEffect } from "react";
import {
  ArrowLeft,
  Bot,
  MoreVertical,
  ChevronDown,
  NotebookPen,
} from "lucide-react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import { PostApiCall } from "../utils/apiCall";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import Example from "../components/Modal";

const Classroom = () => {
  const [activeTab, setActiveTab] = useState("lectures");
  const [showFilter, setShowFilter] = useState(false);
  const [showOptionsMenu, setShowOptionsMenu] = useState(null);
  const [lectures, setLectures] = useState([]);
  const [allTags, setAllTags] = useState([]);

  const [loading, setLoading] = useState(true);

  const { user, selectedCourse, setSelectedLecture } = useContext(UserContext);

  const navigate = useNavigate();

  console.log("selectedCourse", selectedCourse);
  console.log("user", user);

  const fetchLectures = async () => {
    try {
      const response = await PostApiCall(
        "http://localhost:8000/api/lecture/getLectures",
        {
          courseId: selectedCourse._id,
          batch: user.batch,
          branch: user.branch,
        }
      );
      setLectures(response.data);
      console.log("getLectures response", response);
    } catch (err) {
      console.log("getLectures error", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedCourse) {
      navigate("/home");
    }
    fetchLectures();
    fetchTags();
  }, []);

  const fetchTags = async () => {
    try {
      const response = await PostApiCall(
        "http://localhost:8000/api/tag/getTags",
        {
          userID: user._id,
        }
      );
      setAllTags(response.data.tag);
      console.log("getTags response", response);
    } catch (err) {
      console.log("getTags error", err);
    }
  };

  const clearContent = () => {
    setShowFilter(false);
    setShowOptionsMenu(null);
  };

  const handleTabClick = (tab) => {
    if (activeTab === tab) {
      setActiveTab(null);
      clearContent();
    } else {
      setActiveTab(tab);
    }
  };

  const renderFilterDropdown = () => {
    if (!showFilter) return null;

    const filterOptions =
      activeTab === "lectures"
        ? ["Filter by Difficulty", "Filter by Pages", "Filter by Dates"]
        : activeTab === "assignments"
        ? ["Due", "Missing", "Submitted"]
        : ["Recent", "Important", "All"];

    return (
      <div className="absolute top-8 right-0 rounded-lg w-40 bg-gray-300 shadow-lg z-50">
        {filterOptions.map((option, index) => (
          <p
            key={index}
            className="px-4 py-2 text-black hover:bg-gray-400 cursor-pointer transition-colors"
          >
            {option}
          </p>
        ))}
      </div>
    );
  };

  const noTagsAdded = () => {
    return;
  };

  const renderOptionsMenu = (index, url) => {
    if (showOptionsMenu !== index) return null;

    return (
      <div className="absolute right-0 top-6 rounded-lg w-40 bg-gray-300 shadow-lg z-50">
        <p className="px-4 py-2 text-black hover:bg-gray-400 cursor-pointer transition-colors">
          <Example />
        </p>
        <a href={url} download>
          <p className="px-4 py-2 text-black hover:bg-gray-400 cursor-pointer transition-colors">
            Download
          </p>
        </a>
      </div>
    );
  };

  const renderContent = () => {
    if (!activeTab) return null;

    if (activeTab === "misc") {
      const announcements = [
        {
          title: "Mid-term Exam Schedule",
          date: "Mar 15, 2024",
          type: "Important",
        },
        {
          title: "Guest Lecture Next Week",
          date: "Mar 20, 2024",
          type: "Announcement",
        },
        { title: "Holiday Notice", date: "Mar 25, 2024", type: "General" },
      ];

      return (
        <>
          <div className="relative flex justify-end flex-col items-end">
            <div
              className="flex p-1 justify-around h-5 items-center mt-2 bg-[#ffd700] w-[18%] rounded-lg cursor-pointer"
              onClick={() => setShowFilter(!showFilter)}
            >
              <p>Filter</p>
              <ChevronDown size={16} />
            </div>
            {renderFilterDropdown()}
          </div>

          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="flex flex-col my-4 bg-[#92b3b3] p-3 rounded-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="m-0 text-lg font-medium">
                  {announcement.title}
                </h4>
                <span className="text-sm bg-[#ffd700] px-2 py-1 rounded">
                  {announcement.type}
                </span>
              </div>
              <p className="text-sm m-0">{announcement.date}</p>
            </div>
          ))}
        </>
      );
    } else if (activeTab === "assignments") {
      const items = [1, 2, 3];
      return (
        <>
          <div className="relative flex justify-end flex-col items-end">
            <div
              className="flex p-1 justify-around h-5 items-center mt-2 bg-[#ffd700] w-[18%] rounded-lg cursor-pointer"
              onClick={() => setShowFilter(!showFilter)}
            >
              <p>Filter</p>
              <ChevronDown size={16} />
            </div>
            {renderFilterDropdown()}
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between my-4 bg-[#92b3b3] p-1 rounded-lg overflow-visible"
            >
              <div className="p-1 w-[70%] rounded-lg">
                {`Assignment ${item} PDF`}
              </div>
            </div>
          ))}
        </>
      );
    }

    return (
      <>
        <div className="relative flex justify-end flex-col items-end">
          <div
            className="flex p-1 justify-around h-5 items-center mt-2 bg-[#ffd700] w-[18%] rounded-lg cursor-pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            <p>Filter</p>
            <ChevronDown size={16} />
          </div>
          {renderFilterDropdown()}
        </div>

        {lectures.map((lecture, index) => (
          <div
            key={index}
            className="flex justify-between my-4 bg-[#92b3b3] p-1 rounded-lg overflow-visible"
          >
            <div className="p-1 w-[70%] rounded-lg">{lecture.name}</div>
            <div className="relative flex justify-around items-center p-1 w-1/4 bg-[#ffd700] rounded-lg h-5">
              <NotebookPen
                size={16}
                className="hover:scale-150 transition-transform cursor-pointer"
                onClick={() => {
                  setSelectedLecture(lecture);
                  navigate("/notes");
                }}
              />
              <Bot
                size={16}
                className="hover:scale-150 transition-transform cursor-pointer"
                onClick={() => {
                  console.log("lecture", lecture);
                  setSelectedLecture(lecture);
                  navigate("/chatbot");
                }}
              />
              <div className="relative">
                <MoreVertical
                  size={16}
                  className="hover:scale-150 transition-transform cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOptionsMenu(
                      showOptionsMenu === index ? null : index
                    );
                  }}
                />
                {renderOptionsMenu(index, lecture.link)}
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white font-sans">
        <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-4 p-4 bg-[#302b63] text-white border-b border-white/20">
            <ArrowLeft
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              size={20}
              onClick={() => navigate("/home")}
            />
            <h1 className="text-lg font-semibold m-0">Your Classrooms</h1>
          </div>

          {/* Course Name */}
          <div className="w-[95%] mx-auto flex justify-center items-center py-4">
            <h3 className="text-xl m-0">{selectedCourse.name}</h3>
          </div>

          <div className="pt-0 p-6 overflow-auto flex-1">
            {/* Feature List with Active Lectures Tab */}

            <div className="flex items-center p-4 bg-[#302b63] rounded-lg shadow-inner">
              <div className="w-1/3 flex flex-row items-center justify-around cursor-pointer text-[#ffd700]">
                <p className="m-0 mx-1">Lectures</p>
                <p className="m-0 mx-1">|</p>
              </div>
              <div className="w-1/3 flex flex-row items-center justify-around cursor-pointer mx-2.5 text-white hover:text-[#ffd700]">
                <p className="m-0 mx-1">Assignments</p>
              </div>
              <div className="w-1/3 flex flex-row items-center justify-around cursor-pointer text-white hover:text-[#ffd700]">
                <p className="m-0 mx-1">|</p>
                <p className="m-0 mx-1">Misc</p>
              </div>
            </div>

            {/* Filter Button */}
            <div className="relative flex justify-end flex-col items-end mb-4">
              <div className="flex p-1 justify-around h-5 items-center mt-2 bg-[#ffd700] w-[18%] rounded-lg cursor-pointer">
                <p>Filter</p>
                <ChevronDown size={16} />
              </div>
            </div>

            {/* Lecture List Skeleton */}
            <div className="space-y-4">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-[#92b3b3] h-[40px] rounded-lg"
                >
                  <SkeletonTheme baseColor="#92b3b3" highlightColor="#a8c5c5">
                    <div className="flex w-full h-full justify-between items-center">
                      <div className="h-[100%] w-[100%]">
                        <Skeleton height={35} className="rounded-lg" />
                      </div>
                    </div>
                  </SkeletonTheme>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="w-[400px]">
        <div className="min-h-[600px] bg-[#24243e] shadow-lg overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-2.5 p-4 bg-[#302b63] border-b border-white/20">
            <ArrowLeft
              className="text-gray-300 hover:text-white cursor-pointer transition-colors"
              size={20}
              onClick={() => navigate("/home")}
            />
            <h1 className="text-lg font-medium text-antique-white m-0">
              Your Classrooms
            </h1>
          </div>

          {/* Subject Name */}
          <div className="w-[95%] mx-auto flex justify-center items-center py-4">
            <h3 className="text-xl m-0">{selectedCourse.name}</h3>
          </div>

          {/* Main Content */}
          <div className="pt-0 p-6 overflow-auto flex-1">
            {/* Feature List */}
            <div className="flex items-center p-4 bg-[#302b63] rounded-lg shadow-inner">
              <div
                className={`w-1/3 flex flex-row items-center justify-around cursor-pointer ${
                  activeTab === "lectures"
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => handleTabClick("lectures")}
              >
                <p className="m-0 mx-1">Lectures</p>
                <p className="m-0 mx-1">|</p>
              </div>
              <div
                className={`w-1/3 flex flex-row items-center justify-around cursor-pointer mx-2.5 ${
                  activeTab === "assignments"
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => handleTabClick("assignments")}
              >
                <p className="m-0 mx-1">Assignments</p>
              </div>
              <div
                className={`w-1/3 flex flex-row items-center justify-around cursor-pointer ${
                  activeTab === "misc"
                    ? "text-[#ffd700]"
                    : "text-white hover:text-[#ffd700]"
                }`}
                onClick={() => handleTabClick("misc")}
              >
                <p className="m-0 mx-1">|</p>
                <p className="m-0 mx-1">Misc</p>
              </div>
            </div>

            {/* Dynamic Content */}
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classroom;

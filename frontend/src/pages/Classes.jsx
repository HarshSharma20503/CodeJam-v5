import { ArrowLeft } from 'lucide-react';

const ClassroomList = () => {
  const classrooms = [
    'SDF - 1 LAB',
    'Class 2',
    'Class 3',
    'Class 4',
    'Class 5'
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-4 p-4 bg-[#302b63] border-b border-white/20">
          <ArrowLeft 
            className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer" 
            size={20}
          />
          <h1 className="text-xl font-semibold text-white m-0">
            Your Classrooms
          </h1>
        </div>

        {/* Classroom List */}
        <div className="p-5 space-y-4 overflow-y-auto">
          {classrooms.map((classroom, index) => (
            <div
              key={index}
              className="h-[50px] flex items-center px-4 bg-[#302b63] text-white rounded-lg shadow-md cursor-pointer transform transition-all hover:scale-105 hover:bg-[#bfad45] hover:text-black"
            >
              {classroom}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClassroomList;
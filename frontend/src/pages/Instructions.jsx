import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Instructions = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <div className="w-[400px] h-[600px] bg-gradient-to-b from-[#1e1e2f] via-[#302b63] to-[#24243e] shadow-lg flex flex-col overflow-hidden">
                <div className="flex items-center justify-start gap-4 p-4 bg-[#302b63] text-white border-b border-opacity-20 border-white">
                    <i className="ri-arrow-left-line text-xl text-gray-400 cursor-pointer hover:text-yellow-400 transition ease-in-out"></i>
                    <h1 className="text-lg font-semibold m-0">Your Classrooms</h1>
                </div>
                <div className="flex-1 p-6 overflow-y-auto">
                    <div className="text-center text-yellow-400 bg-opacity-30 bg-[#302b63] p-4 rounded-xl border border-opacity-20 border-yellow-400 mb-6">
                        First time user? Read instructions to get started
                    </div>
                    <h1 className="text-yellow-400 text-xl mb-6">Instructions:</h1>
                    <ul className="flex flex-col gap-6">
                        <li className="flex items-start p-5 bg-opacity-30 bg-[#302b63] rounded-xl hover:translate-x-2 hover:bg-opacity-50 transition ease-in-out">
                            <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">1.</span>
                            <span className="text-white text-base leading-relaxed">
                                Go to any of your course in the classroom
                            </span>
                        </li>
                        <li className="flex items-start p-5 bg-opacity-30 bg-[#302b63] rounded-xl hover:translate-x-2 hover:bg-opacity-50 transition ease-in-out">
                            <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">2.</span>
                            <span className="text-white text-base leading-relaxed">
                                Scroll till the bottom and wait for every PDF to be loaded
                            </span>
                        </li>
                        <li className="flex items-start p-5 bg-opacity-30 bg-[#302b63] rounded-xl hover:translate-x-2 hover:bg-opacity-50 transition ease-in-out">
                            <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">3.</span>
                            <span className="text-white text-base leading-relaxed">
                                Make sure you are authenticated, then click on the process button in the top right
                            </span>
                        </li>
                        <li className="flex items-start p-5 bg-opacity-30 bg-[#302b63] rounded-xl hover:translate-x-2 hover:bg-opacity-50 transition ease-in-out">
                            <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">4.</span>
                            <span className="text-white text-base leading-relaxed">
                                Wait for the process to complete. You can change tabs but please don't close the browser
                            </span>
                        </li>
                        <li className="flex items-start p-5 bg-opacity-30 bg-[#302b63] rounded-xl hover:translate-x-2 hover:bg-opacity-50 transition ease-in-out">
                            <span className="text-yellow-400 text-lg font-semibold mr-4 min-w-[25px]">5.</span>
                            <span className="text-white text-base leading-relaxed">
                                After completion, reload the extension to see your course on the homepage with all lectures and features
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Instructions;

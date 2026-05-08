import React from 'react'

function SubHanding() {
    return (
        <div className="w-full p-2 lg:h-[98%] lg:rounded-2xl h-[55%] mt-[2px] flex items-center justify-center bg-black/50 backdrop-blur-sm">

            <div className="text-center px-4 max-w-3xl animate-fadeIn">

                {/* Main Heading */}
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                    Building modern and scalable web applications
                </h1>

                {/* Sub Text */}
                <p className="mt-4 text-gray-300 text-lg md:text-xl">
                    Turning ideas into powerful digital experiences.
                </p>

                {/* Extra Text */}
                <p className="mt-2 text-gray-400 text-sm md:text-base">
                    I create fast, responsive, and user-friendly web apps using modern technologies like React, Node.js, and MongoDB.
                </p>

                {/* Button */}
                <div className="mt-6 gap-2 flex items-center justify-center">
                    <button onClick={() => window.location.href = "#contact"} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                                  text-white rounded-lg transition duration-300  hover:scale-110 hover:shadow-xl">
                        View Projects
                    </button>
                    <button onClick={() => window.location.href = "#contact"} className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 
                                  text-white rounded-lg transition duration-300  hover:scale-110 hover:shadow-xl">
                        Contact Me
                    </button>
                </div>

            </div>

            {/* Animation Style */}
            <style>
                {`
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-in-out;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
            </style>

        </div>
    )
}

export default SubHanding
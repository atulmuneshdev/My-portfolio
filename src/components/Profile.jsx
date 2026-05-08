import React, { useEffect, useState } from 'react'

function Profile() {
    const text = "{ Hi, I'm Kumar Atul Munesh 👋 }";
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;

            if (i === text.length) {
                clearInterval(interval);
            }
        }, 100); // typing speed

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='   w-full lg:w-[60%] lg:h-[98%] p-2 lg:rounded-2xl h-80 gap-2  flex flex-col items-center justify-center backdrop-blur-sm'>
           
            <img src="atul1.png" alt="" className='box-animate lg:h-70  h-63 rounded-full ' />
            {/* <p className='lg:hidden bg-linear-to-r from-pink-700 to-blue-100 text-black font-bold py-2 px-10 rounded-2xl'>Kumar Atul munesh</p> */}
            <p className="  font-black  lg:text-3xl text-lg text-white  text-center">{displayText}</p>
            <p className=" delay-2 font-black text-2xl text-amber-100">Full Stack Developer</p>

        </div>
    )
}

export default Profile
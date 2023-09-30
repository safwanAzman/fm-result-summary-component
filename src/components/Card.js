import React from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';
const Card =  ({icon,bgColor,textColor,category,score}) => {
    return (
        <div className={`${bgColor} bg-opacity-5 py-4 px-6 rounded-lg my-2 flex items-center justify-between`}>
        <div className={`flex space-x-4 ${textColor}`}>
            <Image
                src={icon}
                alt="icon"
                width={1000}
                height={1000}
                className='object-contain w-full h-auto '
            />
            <h1 className="text-xl myFontDefault">{category}</h1>
        </div>
        <div>
            <div className="flex items-center space-x-2">
                <CountUp 
                    end={score}  
                    className="text-xl myFontBold"
                />
                <h1 className="text-gray-400">/</h1>
                <h1 className="text-gray-400">100</h1>
            </div>
        </div>
    </div>
    );
}

export default Card
import React from 'react';

export default function Task({ time, taskDesc }) {

    return (
        <div className="task bg-white p-7 w-full ml-7">
            <p className="text-gray-500">{time}</p>
            <div className="flex">
                <input
                    type="radio"
                    className="ml-6"
                />
                <p>{taskDesc}</p>
            </div>
        </div>
    );
}
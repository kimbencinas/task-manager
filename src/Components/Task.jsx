import React from 'react';

export default function Task() {

    return (
        <div className="task bg-white p-7 w-full ml-7">
            <p className="text-gray-500">7:30am</p>
            <div className="flex">
                <input
                    type="radio"
                    className="ml-6"
                />
                <p>Start presentation slides</p>
            </div>
        </div>
    );
}
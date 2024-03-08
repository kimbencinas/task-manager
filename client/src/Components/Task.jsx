import React, { useState } from 'react';

export default function Task({ time, taskDesc, taskId, handleSelectTask }) {
    const [selectedTaskId, setSelectedTaskId] = useState(null);

    const handleRadioSelect = () => {
        setSelectedTaskId(taskId);
        handleSelectTask(taskId);
    }

    return (
        <div className="task bg-white p-7 w-81 ml-7 mb-3 mt-5 mr-7 rounded-xl">
            <p className="text-gray-500 mr-5 mb-3">{time}</p>
            <div className="flex items-center mb-2">
                <input
                    type="radio"
                    className="ml-16"
                    onChange={handleRadioSelect}
                    checked={selectedTaskId === taskId}
                />
                <p className="text-lg font-normal">{taskDesc}</p>
            </div>
        </div>
    );
}
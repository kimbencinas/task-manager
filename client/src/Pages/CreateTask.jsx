import React, { useState } from 'react';

export default function CreateTask() {
    const [taskDetails, setTaskDetails] = useState({
        task_time: '',
        task_description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="main-container flex items-center justify-center h-screen">
            <div>
                <h2 className="font-medium mb-4">Create a task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="task_time" className="text-black">
                            Task time:
                        </label>
                        <input
                            type="text"
                            id="task_time"
                            value={taskDetails.task_time}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="task_description" className="text-black">
                            Task description
                        </label>
                        <input
                            type="text"
                            id="task_description"
                            value={taskDetails.task_description}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 text-sm h-9">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
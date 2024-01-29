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
        <div className="main-container">
            <h2>Create a task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <div>
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
                <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 text-sm h-9">Submit</button>
            </form>
        </div>
    );
}
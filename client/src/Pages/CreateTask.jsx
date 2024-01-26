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
                <label htmlFor="task_time">
                    Task time:
                </label>
                <input
                    type="text"
                    id="task_time"
                    value={taskDetails.task_time}
                    onChange={handleInputChange}
                />
                <label htmlFor="task_description">
                    Task description
                </label>
                <input
                    type="text"
                    id="task_description"
                    value={taskDetails.task_description}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
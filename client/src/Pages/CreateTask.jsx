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
            <div className="bg-white bg-opacity-50 rounded-xl p-24 w-6/12">
                <h2 className="font-medium mb-8 text-4xl text-center">Create a task</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4 p-2">
                        <label htmlFor="task_time" className="text-black block text-lg mb-3 font-medium">
                            Task time:
                        </label>
                        <input
                            type="text"
                            id="task_time"
                            value={taskDetails.task_time}
                            onChange={handleInputChange}
                            className="w-full rounded-md drop-shadow-lg h-8"
                        />
                    </div>
                    <div className="mb-11 p-2">
                        <label htmlFor="task_description" className="text-black block text-lg mb-3 font-medium">
                            Task description
                        </label>
                        <input
                            type="text"
                            id="task_description"
                            value={taskDetails.task_description}
                            onChange={handleInputChange}
                            className="w-full rounded-md drop-shadow-lg h-8"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="bg-blue-500 text-white rounded-xl text-md h-9 w-24 drop-shadow-lg">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
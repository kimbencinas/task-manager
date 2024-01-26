import React, { useState, useEffect } from 'react';
import CreateTask from './CreateTask';

export default function MainContent() {
    const [currentDate, setCurrentDate] = useState('');
    const [displayCreateTask, setDisplayCreateTask] = useState(false);
    const [taskDetails, setTaskDetails] = useState({
        task_time: '',
        task_description: '',
    });


    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            let day = date.getDate();
            let month = date.toLocaleString('en-US', { month: 'long' });

            setCurrentDate(`${month} ${day}`);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);



    const createTask = async () => {
        try {
            const response = await fetch('/api/tasks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskDetails),
            });
            if (response.ok) {
                console.log('Task successfully added.');
            } else {
                console.log('Task failed to be created.');
            }
        } catch (error) {
            console.log('Error creating task', error);
        }
    };

    const toggleCreateTask = () => {
        setDisplayCreateTask(!displayCreateTask);
    };

    return (
        <div>
            <div className="main-content flex p-8 text-2xl">
                <h1 className='current-day-title font-medium'>Today's Tasks</h1>
                <button onClick={createTask} className="bg-black text-white rounded-lg p-2 text-sm h-9 ml-auto">Create task</button>
            </div>
            <h3 className="todays-date ml-8 mb-2 text-lg">{currentDate}</h3>
            {displayCreateTask && <CreateTask />}
        </div>
    );
}
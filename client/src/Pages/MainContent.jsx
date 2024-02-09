import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateTask from './CreateTask';
import Task from '../Components/Task';

export default function MainContent() {
    const [currentDate, setCurrentDate] = useState('');
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            let day = date.getDate();
            let month = date.toLocaleString('en-US', { month: 'long' });

            setCurrentDate(`${month} ${day}`);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        fetch("/api/tasks")
            .then(response => response.json())
            .then(data => {
                const sortedTasks = data.tasks.sort((a, b) => {
                    let timeA = new Date(a.task_time);
                    let timeB = new Date(b.task_time);
                    return timeA = timeB;
                });
                setTasks(sortedTasks);
            })
            .catch(error => console.error(error))
    }, []);

    function formatTime(time) {
        const date = new Date(time);
        return date.toLocaleDateString([], { hour: 'numeric', minute: '2-digit' });
    }

    return (
        <div>
            <div className="main-content flex p-8 text-2xl">
                <h1 className='current-day-title font-medium'>Today's Tasks</h1>
                <Link to="/create-task" className="ml-auto">
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-9 ml-auto">Create task</button>
                </Link>
            </div>
            <h3 className="todays-date ml-8 mb-2 text-lg">{currentDate}</h3>
            {tasks.map((task, index) => (
                <Task key={index} time={formatTime(task.task_time)} taskDesc={task.task_description} />
            ))}
        </div>
    );
}
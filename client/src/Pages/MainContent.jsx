import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateTask from './CreateTask';
import Task from '../Components/Task';
import trashicon from '../img/trash-icon.png';

export default function MainContent() {
    const [currentDate, setCurrentDate] = useState('');
    const [tasks, setTasks] = useState([]);
    const [mountDate, setMountDate] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            let day = date.getDate();
            let month = date.toLocaleString('en-US', { month: 'long' });
            const currentDateStr = `${month} ${day}`;
            setCurrentDate(currentDateStr);

            if (currentDateStr !== mountDate) {
                setTasks([]);
                setMountDate(currentDateStr);
            }
        }, 1000);

        const date = new Date();
        let day = date.getDate();
        let month = date.toLocaleString('en-US', { month: 'long' });
        setMountDate(`${month} ${day}`);

        return () => clearInterval(intervalId);
    }, [mountDate]);

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
    }, [mountDate]);

    function formatTime(time) {
        const date = new Date(time);
        return date.toLocaleDateString([], { hour: 'numeric', minute: '2-digit' });
    }

    const handleDeleteTask = (taskId) => {
        fetch(`/api/tasks/${taskId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
                } else {
                    console.log('Failed to delete task.');
                }
            })
            .catch(error => {
                console.error('An error has occurred.', error);
            });
    };

    return (
        <div>
            <div className="main-content flex p-8 text-2xl gap-2 mt-4">
                <h1 className='current-day-title font-medium'>Today's Tasks</h1>
                <Link to="/create-task" className="ml-auto">
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-9 ml-auto shadow-lg">Create task</button>
                </Link>
                <button>
                    <img src={trashicon} className="size-9" />
                </button>
            </div>
            <h3 className="todays-date ml-8 text-lg text-zinc-500 font-medium">{currentDate}</h3>
            {tasks.map((task, index) => (
                <Task key={index} time={formatTime(task.task_time)} taskDesc={task.task_description} taskId={task.id} handleDeleteTask={handleDeleteTask} />
            ))}
        </div>
    );
}
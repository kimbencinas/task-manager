import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateTask from './CreateTask';

export default function MainContent() {
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            let day = date.getDate();
            let month = date.toLocaleString('en-US', { month: 'long' });

            setCurrentDate(`${month} ${day}`);
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <div className="main-content flex p-8 text-2xl">
                <h1 className='current-day-title font-medium'>Today's Tasks</h1>
                <Link to="/create-task" className="ml-auto">
                    <button className="bg-black text-white rounded-lg p-2 text-sm h-9 ml-auto">Create task</button>
                </Link>
            </div>
            <h3 className="todays-date ml-8 mb-2 text-lg">{currentDate}</h3>
        </div>
    );
}
import React, { useState, useEffect } from 'react';

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
            <div className="main-content flex p-8">
                <h1 className='current-day-title'>Today's Tasks</h1>
                <button className="bg-black text-white rounded-lg p-2 text-sm h-9 ml-auto">Create task</button>
            </div>
            <h3 className="todays-date ml-6">{currentDate}</h3>
        </div>
    );
}
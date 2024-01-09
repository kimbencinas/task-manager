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
        <div className='main-content'>
            <h1 className='current-day-title'>Today's Tasks</h1>
            <h3 className='todays-date'>{currentDate}</h3>
        </div>
    );
}
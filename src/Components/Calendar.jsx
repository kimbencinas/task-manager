import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className='content-container'>
            <div className='calendar-container'>
                <Calendar 
                    onChange={onChange} 
                    value={date} 
                    className="rounded-md p-2"
                />
            </div>
            <div className='scheduled-container'>
                <h4>Scheduled</h4>
                <div className="scheduled-events bg-white rounded-md w-full p-4">
                    <p>Go to concert</p>
                    <p className="text-gray-500 mt-2">January 8th</p>
                </div>
                <p className="text-blue-500">View all</p>
            </div>
        </div>
    );
}
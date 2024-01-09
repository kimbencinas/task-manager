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
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
}
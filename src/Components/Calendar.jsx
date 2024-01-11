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
            <div className='scheduled-container'>
                <h4>Scheduled</h4>
                <div className='scheduled-events'>

                    <button type="button">View all</button>
                </div>
            </div>
        </div>
    );
}
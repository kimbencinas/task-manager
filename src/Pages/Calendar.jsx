import React, { useState } from 'react';
import Calendar from 'react-calendar';
import ScheduledEvents from '../Components/ScheduledEvents';
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
            <div className='scheduled-container p-4'>
                <h4 className="mt-3 mb-2">Scheduled</h4>
                <ScheduledEvents eventName="Go to concert" eventDate="January 8th" />
                <ScheduledEvents eventName="Meet with client" eventDate="January 9th" />
                <p className="text-blue-500 ml-40 mt-4">View all</p>
            </div>
        </div>
    );
}
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import ScheduledEvents from '../Components/ScheduledEvents';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';
import { Link } from 'react-router-dom';

export default function MyCalendar() {
    const [date, setDate] = useState(new Date());
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("/api/tasks")
            .then(response => response.json())
            .then(data => {
                setEvents(data.tasks);
            })
            .catch(error => console.error(error))
    }, [date])

    const onChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <div className='content-container'>
            <div className='calendar-container'>
                <Calendar
                    onChange={onChange}
                    value={date}
                    className="rounded-md p-5"
                />
            </div>
            <div className='scheduled-container p-6'>
                <h4 className="mb-2 font-medium text-lg">Scheduled</h4>
                <ScheduledEvents events={events} />
                <Link to="/events">
                    <p className="text-blue-500 ml-40 mt-4">View all</p>
                </Link>
            </div>
        </div>
    );
}
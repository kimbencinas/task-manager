import React, { useState, useEffect } from 'react';
import Task from '../Components/Task'

export default function EventPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch("api/tasks")
            .then(response => response.json())
            .then(data => {
                setEvents(data.tasks);
            })
            .catch(error => console.error(error))
    }, []);

    return (
        <div className="main-container flex items-center justify-center h-screen">
            <div className="bg-white bg-opacity-50 rounded-xl p-24 w-4/6">
                <h2 className="font-medium text-3xl text-center">Events</h2>
                <div>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index}>
                                <Task time={event.task_time} taskDesc={event.task_description} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
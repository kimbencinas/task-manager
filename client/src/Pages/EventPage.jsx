import React, { useState, useEffect } from 'react';

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
            <div className="bg-white bg-opacity-50 rounded-xl p-24 w-6/12">
                <h2>Events</h2>
                <ul>
                    {events.map((event, index) => (
                        <li key={index}>
                            <p>{event.task_description}</p>
                            <p>{event.task_time}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
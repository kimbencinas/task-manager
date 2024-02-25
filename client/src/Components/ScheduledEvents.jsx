import React from 'react';

export default function ScheduledEvents({ events }) {
    const futureEvents = events.filter(event => new Date(event.task.time) > new Date());

    return (
        <div className="scheduled-events bg-white rounded-lg w-full p-4 mb-2">
            {futureEvents.length > 0 ? (
                futureEvents.map((event, index) => (
                    <div>
                        <p className="font-medium">{event.task_description}</p>
                        <p className="text-gray-500 mt-1">{event.task_time}</p>
                    </div>
                ))
            ) : (
                <p>You have no events.</p>
            )}
        </div>
    );
}
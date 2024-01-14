import React from 'react';

export default function ScheduledEvents({ eventName, eventDate }) {

    return (
        <div className="scheduled-events bg-white rounded-md w-full p-4">
            <p>{eventName}</p>
            <p className="text-gray-500 mt-2">{eventDate}</p>
        </div>
    );
}
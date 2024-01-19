import React from 'react';

export default function ScheduledEvents({ eventName, eventDate }) {

    return (
        <div className="scheduled-events bg-white rounded-lg w-full p-4 mb-2">
            <p className="font-medium">{eventName}</p>
            <p className="text-gray-500 mt-1">{eventDate}</p>
        </div>
    );
}
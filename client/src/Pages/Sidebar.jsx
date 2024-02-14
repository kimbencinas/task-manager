import React from 'react';
import taskzen from '../img/taskzen-logo.png';

export default function Sidebar() {

    return (
        <div className="sidebar mt-2">
            <h2>TaskZen</h2>
            <img src={taskzen} />
        </div>
    );
}
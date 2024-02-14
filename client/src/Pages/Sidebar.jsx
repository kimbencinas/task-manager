import React from 'react';
import taskzen from '../img/taskzen-logo.png';

export default function Sidebar() {

    return (
        <div className="sidebar mt-2">
            <img src={taskzen} className="mt-4 scale-90" />
        </div>
    );
}
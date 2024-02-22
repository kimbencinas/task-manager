import React from 'react';
import taskzen from '../img/taskzen-logo.png';
import usericon from '../img/user-icon.png'
import settingsicon from '../img/settings-icon.png'

export default function Sidebar() {

    return (
        <div className="sidebar mt-2">
            <img src={taskzen} />
            <img src={usericon} />
            <img src={settingsicon} />
        </div>
    );
}
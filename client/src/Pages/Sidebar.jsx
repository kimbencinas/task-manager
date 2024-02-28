import React from 'react';
import taskzen from '../img/taskzen-logo.png';
import usericon from '../img/user-icon.png';
import settingsicon from '../img/settings-icon.png';
import createtask from '../img/tasklogo.png';
import taskicon from '../img/tasks-page-icon.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
        <div className="sidebar mt-2 flex flex-col items-center gap-2">
            <Link to="/">
                <img src={taskzen} className="w-13" />
            </Link>
            <img src={usericon} className="size-14" />
            <img src={settingsicon} className="size-14" />
            <Link to="/create-task">
                <img src={createtask} className="size-14" />
            </Link>
            <Link to="/events">
                <img src={taskicon} className="w-36" />
            </Link>
        </div>
    );
}

import React from 'react';
import taskzen from '../img/taskzen-logo.png';
import usericon from '../img/user-icon.png';
import settingsicon from '../img/settings-icon.png';
import tasklogo from '../img/tasklogo.png';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    return (
        <div className="sidebar mt-2">
            <Link to="/">
                <img src={taskzen} className="w-13" />
            </Link>
            <img src={usericon} className="sm:w-24 md:w-32 lg:w-40 xl:w-48" />
            <img src={settingsicon} />
            <Link to="/events">
                <img src={tasklogo} />
            </Link>
        </div>
    );
}
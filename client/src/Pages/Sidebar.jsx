import React from 'react';
import { Link } from 'react-router-dom';
import taskzen from '../img/taskzen-logo.png';

export default function Sidebar() {

    return (
        <div className="sidebar mt-2">
            <Link to="/">
                <img src={taskzen} className="mt-4 scale-90 mt-6" />
            </Link>
        </div>
    );
}
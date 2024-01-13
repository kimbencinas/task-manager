import React from 'react';
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import Calendar from './Components/Calendar'
import Task from './Components/Task'
import './App.css';

export default function App() {

    return (
        <div className="flex">
            <div className="w-1/5">
                <Sidebar />
            </div>
            <div className="w-3/5">
                <MainContent />
                <Task />
            </div>
            <div className="w-1/5">
                <Calendar />
            </div>
        </div>
    );
}
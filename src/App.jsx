import React from 'react';
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import Calendar from './Components/Calendar'
import Task from './Components/Task'
import './App.css';

export default function App() {

    return (
        <div className="app flex justify-center h-screen mt-5">
            <div className="w-1/12 bg-gray-100 ml-5 rounded-md">
                <Sidebar />
            </div>
            <div className="w-3/4 bg-gray-100 ml-4 rounded-md">
                <MainContent />
                <Task />
            </div>
            <div className="w-1/4 bg-gray-100 ml-4 mr-5 rounded-md">
                <Calendar />
            </div>
        </div>
    );
}
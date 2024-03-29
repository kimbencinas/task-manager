import React, { useEffect, useState } from 'react';
import Sidebar from './Pages/Sidebar'
import MainContent from './Pages/MainContent'
import Calendar from './Pages/Calendar'
import Task from './Components/Task'
import './App.css';

export default function App() {
    const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    }, [])

    return (
        <div className="app flex items-stretch justify-center h-screen p-9">
            <div className="w-1/12 bg-white bg-opacity-50 rounded-xl">
                <Sidebar />
            </div>
            <div className="w-3/4 bg-white bg-opacity-50 ml-4 rounded-xl">
                <MainContent />
            </div>
            <div className="w-1/4 bg-white bg-opacity-50 ml-4 rounded-xl">
                <Calendar />
            </div>
        </div>
    );
}
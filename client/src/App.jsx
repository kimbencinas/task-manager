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
        <div className="app flex justify-center h-screen mt-5">
            <div className="w-1/12 bg-white bg-opacity-50 ml-5 rounded-xl">
                <Sidebar />
            </div>
            <div className="w-3/4 bg-white bg-opacity-50 ml-4 rounded-xl">
                <MainContent />
            </div>
            <div className="w-1/4 bg-white bg-opacity-50 ml-4 mr-5 rounded-xl">
                <Calendar />
            </div>
        </div>
    );
}
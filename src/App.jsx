import React from 'react';
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import Calendar from './Components/Calendar'
import './App.css';

export default function App() {

    return (
        <div className='app'>
            <Sidebar />
            <MainContent />
            <Calendar />
        </div>
    );
}
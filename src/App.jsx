import React from 'react';
import Sidebar from './Components/Sidebar'
import MainContent from './Components/MainContent'
import SideContent from './Components/SideContent'
import './App.css';

export default function App() {

    return (
        <div className='app'>
            <Sidebar />
            <MainContent />
            <SideContent />
        </div>
    );
}
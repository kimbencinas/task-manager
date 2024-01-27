import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import App from "./App.jsx";
import ScheduledEvents from './Components/ScheduledEvents.jsx';
import Task from './Components/Task.jsx';
import Calendar from './Pages/Calendar.jsx';
import CreateTask from './Pages/CreateTask.jsx';
import MainContent from './Pages/MainContent.jsx';
import Sidebar from './Pages/Sidebar.jsx';
import Login from './Pages/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/create-task',
    element: <CreateTask />
  },
  {
    path: '/scheduled-events',
    element: <ScheduledEvents />
  },
  {
    path: '/login',
    element: <Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import HomeApp from './HomeApp'
import RegisterApp from './RegisterApp'
import LoginApp from './LoginApp'
import Layout from './Layout'
import AddTask from './AddTask'
import TaskDescription from './TaskDescription'
import AddEmployee from './AddEmployee'
import DeleteTask from './DeleteTask'
import UpdateTask from './UpdateTask'
import './index.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<HomeApp />} />
        <Route path='/register' element={<RegisterApp />} />
        <Route path='/login' element={<LoginApp />} />
        <Route path='/dashboard' element={<Layout />} />
        <Route path='/add-task' element={<AddTask />} />
        <Route path='/task-description' element={<TaskDescription />} />
        <Route path='/add-employee' element={<AddEmployee />} />
        <Route path='/delete-task/:id' element={<DeleteTask/>} />
        <Route path='/edit-task/:id' element={<UpdateTask/>} />
        
      </Routes>
    </Router>
  </StrictMode>,
)

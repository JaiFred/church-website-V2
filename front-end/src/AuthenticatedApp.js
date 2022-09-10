import react, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'

import AuthNavBar from './AuthNavBar';
import EventContainer from './EventContainer';
import Homepage from './Homepage.';
import SubmitEvent from './SubmitEvent';

function AuthenticatedApp({ currentAdmin, setCurrentAdmin }){

    const [ showEvents, setShowEvents] = useState([])
    const [ events, setEvents ] = useState([])

    const navigate = useNavigate()
    

    console.log("made it into our admin account")

    useEffect(() => {
        fetch(`/events`, {
          credentials: 'include'
        })
        .then(res => res.json())
        .then((events) => setShowEvents(events))
      },[])

    const handleLogout = (e) => {
        e.preventDefault()
        fetch(`/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => {
          if (res.ok) {
            setCurrentAdmin(null)
            navigate('/login', {replace:false})
          }
        })
      }

    function handleAddNewEvent(newEvent){
        const newEvents = [...events, newEvent]
        setEvents(newEvents);
    }

    return(
        <form>
            <AuthNavBar 
            currentAdmin={currentAdmin}
            setCurrentAdmin={setCurrentAdmin}
            handleLogout={handleLogout}
            />
            Random
            <Routes>
                <Route path="/login" element={<Navigate replace to="/"/>}/>
                <Route path="/" element={<Homepage/>}/>
                <Route path="/events" element={[<EventContainer showEvents={showEvents} setShowEvents={setShowEvents} handleAddNewEvent={handleAddNewEvent}/>, <SubmitEvent handleAddNewEvent={handleAddNewEvent}/>]}/>
            </Routes>
        </form>
    )
}

export default AuthenticatedApp
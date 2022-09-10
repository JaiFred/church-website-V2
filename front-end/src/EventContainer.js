import react, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom'

import EventDetail from './EventDetail';
import SubmitEvent from './SubmitEvent';

function EventContainer({ showEvents, setShowEvents, handleAddNewEvent }){
    
    const [ events, setEvents ] = useState([])

    //deconstructs our event variables to use in showEvents.map
    const { id, title, activity, description, starts, ends, created_at, update_at } = showEvents
    
    //function to be passed down to enable delete requests on our events
    function handleDeleteEvent(deletedID) {
        // console.log(deletedID)
        const updatedEventsArray = events.filter(
          (event) => event.id !== deletedID
          
        );
        setEvents(updatedEventsArray);
    }

    //Maps our events in the jsx {eventslist} tag  
    const EventList = showEvents.map((event) =>(
        <EventDetail key={event.id} event={event} handleDeleteEvent={handleDeleteEvent}/>
    ))

    return(
        <div>

            {EventList}
            <NavLink className="sumbission-link" to="/events">Create</NavLink>
        </div>
    )
}

export default EventContainer
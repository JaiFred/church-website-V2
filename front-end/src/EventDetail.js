

function EventDetail({ event, handleDeleteEvent }){

const { id, title, activity, description, starts, ends } = event

function handleDeleteClick(e) {
    e.preventDefault()
    const reqObj = {
        method: "DELETE"
    }
    fetch(`/events/${id}`, reqObj )
    .then((res) => res.json())
    .then(handleDeleteEvent(id))
}


// t.string "title"
// t.string "activity"
// t.text "description"
// t.string "location"
// t.datetime "starts"
// t.datetime "ends"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false



    return(
        <div className='top'>
            <ul className='events-box'>
                <li className="listed">
                    <div>
                        <h1 className="event-id">{id}</h1>
                    </div> 
                    <div>
                        <h1 className="event-title">{title}</h1>
                    </div> 
                    <div> 
                        <p className="activity">{activity}</p>
                    </div>
                    <div>
                        <p className="starts">{starts}</p>
                    </div> 
                    <div>
                        <p className="ends">{ends}</p>
                    </div>
                    <button className="delete_button" onClick={handleDeleteClick}>Delete Post</button>
                </li>
            </ul>
        </div>
        
    )
}

export default EventDetail
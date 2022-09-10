import react, { useState } from 'react'

function SubmitEvent({ handleAddNewEvent }){

    // t.string "title"
    // t.string "activity"
    // t.text "description"
    // t.string "location"
    // t.datetime "starts"
    // t.datetime "ends"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false

    const [ title, setTitle ] = useState("")
    const [ activity, setActivity ] = useState("")
    const [ description, setDescription ] = useState ("")
    const [ location, setLocation ] = useState ("")
    const [ startTime, setStartTime ] = useState ("")
    const [ endTime, setEndTime ] = useState ("")
    const [isLoading, setIsLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/events", {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            title: title,
            activity: activity,
            description: description,
            location: location,
            startTime: startTime,
            endTime: endTime,
          })
        })
        .then((res) => res.json())
        .then((newEvent) => handleAddNewEvent(newEvent)); 
    }
    

    return(
        <form onSubmit={handleSubmit}>
            Submit page
            <ul>
                <input 
                type="text" 
                className="title_input" 
                id='title'
                placeholder='title' 
                onChange={(e) => setTitle(e.target.value)}
                />
                <input
                type="text"
                className="activity_input"
                id='activity'
                placeholder='activity'
                onChange={(e) => setActivity(e.target.value)}
                />
                <button className='submitBtn' type='submit'></button>
                
            </ul>
        </form>
    )
}

export default SubmitEvent
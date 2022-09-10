import { NavLink } from 'react-router-dom'

function AuthNavBar({handleLogout}){

    return(
        <nav className='navbar'>
            <div className='navbar-details'>
                <NavLink className="events-link" to="/events">Events</NavLink>
                <NavLink className="home-link" to="/">Home</NavLink>
                <button  onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    )
}

export default AuthNavBar
import { Route, Navigate } from 'react-router-dom';
import { BrowserRouter as Router} from 'react-router-dom';

import Login from './Login';

function UnauthenticatedApp({ setCurrentAdmin }){

    return(
        <div>
            <div>
        {/* <NavBar setCurrentMember={setCurrentMember}/> */}
        <Router>
            {/* <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/> */}
            <Route path="/login" element={<Login setCurrentAdmin={setCurrentAdmin}/>}/>
        </Router>
        </div>
        </div>
    )
    
}

export default UnauthenticatedApp
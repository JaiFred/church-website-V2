import { Route, Routes, Navigate } from 'react-router-dom';


import Login from './Login';

function UnauthenticatedApp({ setCurrentAdmin }){

    return(
        <div>
            <div>
        {/* <NavBar setCurrentMember={setCurrentMember}/> */}
        <Routes>
            {/* <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/> */}
            <Route path="/login" element={<Login setCurrentAdmin={setCurrentAdmin}/>}/>
            {/* <Route path="/login" element={<Navigate replace to="/"/>}/> */}
        </Routes>
        </div>
        </div>
    )
    
}

export default UnauthenticatedApp
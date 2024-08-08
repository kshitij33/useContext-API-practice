import React, {useContext} from 'react'
import UserContext from '../contexts/userContext'

const Profile = () => {
    const {user} = useContext(UserContext);
    
    if (!user) {
        return <>
            please login
        </>
    }

    return <>
        <h1>Welcome {user.username}</h1>
    </>
}

export default Profile
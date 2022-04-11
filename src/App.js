import {useState} from "react";

import css from "./App.module.css";

import {Users,Posts,UserDetails} from './components/index'

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
        setUser(user);
    }

    const getUserId = (userId) => {
        setUserId(userId)
    }

    return (
        <div>
            <div className={css.wrap}>
                <div><Users getUser={getUser}/></div>
                <div>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div>{userId && <Posts userId={userId}/>}</div>
        </div>
    );
}

export default App;

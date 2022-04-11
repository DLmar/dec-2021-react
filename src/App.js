import {useState} from "react";

import posts_style from "./components/Posts/Posts.module.css";
import userDet_style from "./components/UserDetails/UserDetails.module.css";
import css from "./App.module.css";

import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import {Users} from './components/index'

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
                <div className={css.users}><Users getUser={getUser}/></div>
                <div className={userDet_style.userDet}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={posts_style.posts}>{userId && <Posts userId={userId}/>}</div>
        </div>
    );
}

export default App;

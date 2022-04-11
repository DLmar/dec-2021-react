import './App.module.css';
import {Users} from './components/index'
import {useState} from "react";
import Posts from "./components/Posts/Posts";
import UserDetails from "./components/UserDetails/UserDetails";
import css from "./App.module.css";

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
                <div className={css.userDet}>{user && <UserDetails user={user} getUserId={getUserId}/>}</div>
            </div>
            <div className={css.posts}>{userId && <Posts userId={userId}/>}</div>
        </div>
    );
}

export default App;

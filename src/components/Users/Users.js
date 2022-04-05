import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    },[])

    return (
        <div>
            {users.map(user=><User key={user.id} id={user.id} name={user.name} username={user.username} email={user.email}/>)}
        </div>
    );
};

export default Users;

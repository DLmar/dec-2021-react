import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services";

import user_style from './Users.module.css'

const Users = ({getUser}) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getUser().then(value => setUsers(value))
    }, [])

    return (
        <div className={user_style.users}>
            {users && users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export {Users};

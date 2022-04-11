import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services";

const Users = ({getUser}) => {

    const [users, setUsers] = useState(null);

    useEffect(() => {
        userService.getUser().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users && users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export {Users};

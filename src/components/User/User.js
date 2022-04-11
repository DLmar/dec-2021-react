import React from 'react';

const User = ({user, getUser}) => {
    const {id, name} = user;
    return (
        <div>
            <h3>{id}) {name}
                <button onClick={() => getUser(user)}>User Details</button>
            </h3>

        </div>
    );
};

export default User;

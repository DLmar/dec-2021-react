import {NavLink, useNavigate, Outlet} from "react-router-dom";

const Layout = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <NavLink to='/users'>Home</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export {Layout};


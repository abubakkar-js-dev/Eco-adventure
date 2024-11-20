import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        return children;
    }else{
        return <Navigate to={'/auth/login'} state={location.pathname}></Navigate>
    }
};

PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
}

export default PrivateRoute;
import React from 'react'
import {Navigate, Route, RouteProps, RouterProps} from "react-router-dom"
import useAuth from './useAuth';


interface PrivateRouteProps extends  RouterProps {}; // RouteProps

export const PrivateRoute:React.FC<PrivateRouteProps> = ({ ...rest}) => {
  const auth=useAuth();

  if(auth.user!==null) return <Navigate to='/mapa' />;
    return <Route { ...rest} />;
  
}

export default PrivateRoute;
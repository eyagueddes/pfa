import React from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
const PrivateRoute = ({component:Component,auth:{isAuthenticated ,loading}, ...rest}) =>(
    <Route {...rest} render={props =>!isAuthenticated && !loading ? (<Redirect to='/login'/>) : (<Component{...props}/>)}/>
)

PrivateRoute.propTypes = {
auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})
export default connect(mapStateToProps)(PrivateRoute)
=======

import {connect} from 'react-redux';
import{Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';


 const PrivateRoute = ({component:Component,auth: { isAuthenticated,loading},...rest}) =>
 (
     <Route {...rest} 
     render={ props=>!isAuthenticated && !loading ? (<Redirect to='/login'/>):
     ( <Component {...props}/>
     )}/>
    
 ) ;
   

;
PrivateRoute.propTypes={
    auth:PropTypes.object.isRequired,
};
const mapStateToProps=state=>({
    auth:state.auth

});
export default connect(mapStateToProps)(PrivateRoute);
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54

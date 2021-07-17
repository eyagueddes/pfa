import React, { Fragment } from 'react';

import {connect} from 'react-redux';
<<<<<<< HEAD
import {Link as Link1} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

import SideBar2 from "../sidebar2/SideBar2"
import {Link as Link2} from "react-scroll"
import { GridListTileBar } from '@material-ui/core';
const Navbar = ({ auth: { user,isAuthenticated ,loading}, logout }) => {
  
  const guestLinks=(
    
    <ul style={{display:'flex',justifyContent:'center',textAlign:'center'}}>
      
    
    <li>
        <Link1 to="/profiles">
        <i className="fa fa-users"></i>{''}
        <span className="hide-sm">Community</span>
        
          </Link1>
        </li>
        <li>
        <Link1 to="/posts">
        <i className="fa fa-comments-o"></i>{''}
        <span className="hide-sm">Forum</span>
        
          </Link1>
        </li>
    <li><Link1 to="/register"><i className="fas fa-user-plus"></i>{''}
        <span className="hide-sm">Register</span></Link1></li>
        <li><Link1 to="/login"><i className="fa fa-sign-in"></i>{''}
        <span className="hide-sm">Login</span></Link1></li>
    
  </ul>

  ); 

    return(
        <nav className="navbar bg-dark">
          <SideBar2/>
        <h1>
          <Link1 to='/'>
            <i className="fas fa-code"></i> Connect
            </Link1>
        </h1>
        
       {!loading && (<Fragment>{isAuthenticated ? (

        
    <ul>
      
      <li>{user.isAdmin && (<Link1 to="/admin">
      <i className="fa fa-address-card-o"></i>{''}
        <span className="hide-sm">Posts-Admin</span>
        </Link1>)}</li>
      <li>
      <Link1 to="/profiles">
        <i className="fa fa-users"></i>{''}
        <span className="hide-sm">Community</span>
        
          </Link1>
        </li>
        <li>
        <Link1 to="/posts">
        <i className="fa fa-comments-o"></i>{''}
        <span className="hide-sm">Forum</span>
        
          </Link1>
        </li>
      <li>
        <Link1 to="/dashboard">
        <i className="fas fa-user"></i>{''}
        <span className="hide-sm">Dashboard</span>
          </Link1>
        </li>
=======
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';



const Navbar = ({ auth: { isAuthenticated ,loading}, logout }) => {
  const authLinks=(
    <ul>
      <li>
        <Link to ='/dashboard' >
        <i className="fas fa-user"></i>{''}
        <span className="hide-sm">Dashboard</span>
        </Link>
         </li>
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
    <li>
      <a onClick={logout} href='#!'>
        <i className="fas fa-sign-out-alt"></i>{''}
        <span className="hide-sm">Logout</span>
    </a>
    </li>
   
  </ul>

<<<<<<< HEAD
  ) : guestLinks}</Fragment>)}
=======
  );
  const guestLinks=(
    <ul>
    <li><a href='#!'>Developers</a></li>
    <li><Link to="/register">Register</Link></li>
    <li><Link to="/login">Login</Link></li>
  </ul>

  ); 

    return(
        <nav className="navbar bg-dark">
        <h1>
          <Link to='/'>
            <i className="fas fa-code"></i> DevConnector
            </Link>
        </h1>
       {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54
      </nav>
    );
}
Navbar.propTypes={
  logout:PropTypes.func.isRequired,
  auth:PropTypes.object.isRequired,
}
   const mapStateToProps = state =>({
     auth:state.auth

   });
   

export default connect(mapStateToProps,{logout})(Navbar);
import React, { Fragment } from 'react';

import {connect} from 'react-redux';
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
    <li>
      <a onClick={logout} href='#!'>
        <i className="fas fa-sign-out-alt"></i>{''}
        <span className="hide-sm">Logout</span>
    </a>
    </li>
   
  </ul>

  ) : guestLinks}</Fragment>)}
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
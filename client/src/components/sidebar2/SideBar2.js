import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData2 } from './SidebarData2';
import { dataAuth } from './dataAuth';
import './Navbar.css';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SideBar2 = ({isAuthenticated}) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        
          <Link to='#' className='menu-bars1'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        
        <nav className={sidebar ? 'nav-menu1 active' : 'nav-menu1'}>
          <ul style={{display:'unset'}} className='nav-menu-items1' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars1'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {isAuthenticated ? dataAuth.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            }):SidebarData2.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

SideBar2.propTypes = {
  
  isAuthenticated:PropTypes.bool
};

const mapStateToProps = state => ({
 
  isAuthenticated : state.auth.isAuthenticated
});

export default connect(
  mapStateToProps
  
)(SideBar2);


import React from 'react'
import './sideBar.css'
import {SideBarData} from './SideBarData'

import PropTypes from 'prop-types'
import {connect} from 'react-redux';

const sideBar = ({isAuthenticated}) => {
    return (isAuthenticated &&(
        <div className="SideBar">
            <ul className="SidebarList">
            {SideBarData.map((val,key) =>{
                return (
                    <li id={window.location.pathname == val.link ? "active" : ""} key={key} onClick ={() =>{window.location.pathname = val.link}} className="row"> 
                    <div id="icon">{val.icon}</div>

                    <div id="title">{val.title}</div>
                    </li>
                )
            })}
            </ul>
        </div>
    ))
}

sideBar.propTypes = {
   
    isAuthenticated:PropTypes.bool
};

const mapStateToProps = state => ({
    
    isAuthenticated : state.auth.isAuthenticated
})
export default connect(mapStateToProps)(sideBar)

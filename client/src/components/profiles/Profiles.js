import React ,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Spinner from '../layout/Spinner'
import { getProfiles } from '../../actions/profile'
import ProfileItem from './ProfileItem'
import SideBar from '../sideBar/SideBar'
const Profiles = ({getProfiles,isAuthenticated,profile:{profiles,loading}}) => {
    useEffect(() => {
        getProfiles();
    },[getProfiles])
    return (
        <Fragment >
            
            {loading ? <Spinner/> : <Fragment>
                
                <h1 className = "large text-primary">Members</h1>
                <p className = "lead">
                
                    <i className = "fab fa-connectdevelop"></i> Browse and connect with Members
                </p>
                <div className="profiles">
                    {profiles.length >0 ? (profiles.map(profile =>(<ProfileItem key ={profile._id} profile={profile}/>))) : <h4> No profiles Found ... </h4>}
                </div>
                
                </Fragment>}
                
        </Fragment>
    )
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile:PropTypes.object.isRequired,
    isAuthenticated:PropTypes.bool
};

const mapStateToProps = state => ({
    profile : state.profile,
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps,{ getProfiles})(Profiles)

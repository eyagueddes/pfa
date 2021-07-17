<<<<<<< HEAD
import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import videoBack from '../../img/landing_video.mp4'
import video2 from '../../img/22.mp4'
import About from '../sections/About'
import Main from '../sections/Main'
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/posts' />;
  }

  return (
    <div style={{minHeight:"190vh"}}>
    <div className='landing'>
      <video autoPlay muted loop 
      style={{
        position :"absolute",
        width:"100%",
        left:"50%",
        top:"50%",
        height:"100%",
        objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-1"
      }}
      >
            <source src = {video2} type="video/mp4"/>
          </video>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          
          <h1 className='x-large'>Connect</h1>
          <p className='lead'>
            The Social Network That You Connect !
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
           
          </div>
         
        </div>
        <div>

        <Main/>
       
        </div>
        
      </div>
      
      
    </div>
    </div>
    
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
=======
import{ React } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
 import {connect} from 'react-redux';


const Landing = ({isAuthenticated}) => {

if (isAuthenticated){
  return <Redirect to ='/dashboard'/>
}





    return(
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Developer Connector</h1>
            <p className="lead">
              Create a developer profile/portfolio, share posts and get help from
              other developers
            </p>
            <div className="buttons">
              <Link to='/register' className="btn btn-primary">Sign Up</Link>
              <Link to='/login' className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
      
    );
};
Landing.propTypes={
  isAuthenticated:PropTypes.bool,
}
    const mapStateToProps=state=>({
      isAuthenticated:state.auth.isAuthenticated
    });
   

export default connect(mapStateToProps)(Landing) ;
>>>>>>> e37222ed0fbc56feaef64eb4097374fcfeadfe54

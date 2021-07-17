import React, {Fragment,useEffect,useState} from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Landing from './components/layout/Landing';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'; 
import Alert from './components/layout/Alert';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import PostCat from './components/posts/PostCat';
import PostGeneral from './components/posts/PostGeneral';
import PostElec from './components/posts/PostElec';
import PostIOT from './components/posts/PostIOT';
import PostSec from './components/posts/PostSec';
import PostProg from './components/posts/PostProg';

import Post from './components/post/Post';
import PostForm from './components/posts/PostForm'
import PostsAdmin from './components/posts/PostsAdmin';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import SideBar from './components/sideBar/SideBar'
import SideBar2 from './components/sidebar2/SideBar2'
import Footer from './components/footer/Footer'
import About from './components/sections/About'
import Main from './components/sections/Main'
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
//Redux
import {Provider} from 'react-redux';
import store from './store';
import { login } from './actions/auth'
import PostRes from './components/posts/PostRes';


if(localStorage.token){
  setAuthToken(localStorage.token);
}
const App =() => {
  useEffect(() =>{
    store.dispatch(loadUser());
  },[]);
  return (
    
    <div className="page-container">
      <div className="content-wrap">
      
    <Provider store={store}>
  <Router>
    <Fragment>
    
      <Navbar/>
      
      
      <Route exact path ='/' component={Landing}/>
      
      
      <section className="container">
    
        <Alert/>
        <switch>
        
          <Route exact path="/register" component={Register}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path='/profiles' component={Profiles}/>
          <Route exact path='/Posts' component={Posts}/>
          <Route exact path='/Forum/general' component={PostGeneral}/>
          
          <Route exact path='/Forum/programming' component={PostProg}/>
          <Route exact path='/Forum/securite' component={PostSec}/>
          <Route exact path='/Forum/IOT' component={PostIOT}/>
          <Route exact path='/Forum/reseau' component={PostRes}/>
          <Route exact path='/Forum/electronique' component={PostElec}/>
          <Route exact path='/profile/:id' component={Profile}/>
          <Route exact path='/posts/:id' component={Post}/>
          <PrivateRoute exact path="/PostForm" component={PostForm}/>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <PrivateRoute exact path="/admin" component={PostsAdmin}/>
          <PrivateRoute exact path="/create-profile" component={CreateProfile}/>
          <PrivateRoute exact path="/edit-profile" component={EditProfile}/>
          <PrivateRoute exact path="/add-experience" component={AddExperience}/>
          <PrivateRoute exact path="/add-education" component={AddEducation}/>
          
        </switch>
        
      </section>
      
    </Fragment>
    
    </Router>
    </Provider>
    
    </div>
    <Footer/>
    </div>
  );
}

/*App.propTypes = {
  login:PropTypes.func.isRequired,
  
}*/
/*const mapStateToProps = state => ({
  
  isAuthenticated : state.auth.isAuthenticated
})
*/  
export default App


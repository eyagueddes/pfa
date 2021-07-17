import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getPosts } from '../../actions/post';
//import { login } from '../../actions/auth';
import img1 from './img/1.png'
import img2 from './img/2.png'
import img3 from './img/3.png'
import img4 from './img/4.png'
import img5 from './img/5.png'
import img6 from './img/6.png'
import Card from '../Card/Card'
import { makeStyles } from "@material-ui/core/styles"
import { Grid } from "@material-ui/core"
const Posts = () => {

  const useStyles = makeStyles ((theme) => ({
    grid:{
      width:'100%',
      margin:'0px',
      

    }
  }))
 const classes = useStyles();

return (
    <Fragment >
      <p className='lead large text-primary text-center'>
        <i className='fa fa-user' /> Welcome to the community
      </p>
               <div className='posts' style={{display : "flex"}}>
              <Grid container spacing ={0} className={classes.grid}>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/general' imageUrl={img1} title='General' body="If you've got great ideas, then you can share them with others."/>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/programming' imageUrl={img2} title='Programming' body='by one click,you will found all the topics about programming.'/>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/reseau' imageUrl={img3} title='Network' body='if your problems are about Network,solutions can be found here.'/>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/electronique' imageUrl={img4} title='Electronic' body="If you've got great ideas about Electronics then you can share them with others who need them."/>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/securite' imageUrl={img5} title='Security' body="Sharing your ideas about security helps you get better."/>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card className="grid-item" url='/Forum/IOT' imageUrl={img6} title='IOT' body='here,you will find various ideas about your IOT problems.'/>
                </Grid>
              </Grid>
              </div>
    </Fragment>
)
  
};




export default 
Posts;
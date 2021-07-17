import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import {Select,MenuItem,FormControl,InputLabel,makeStyles} from "@material-ui/core"
const PostForm = ({ addPost }) => {
  const useStyles = makeStyles(theme => ({
    FormControl:{
      minWidth:100
    }
  }));
  const classes = useStyles();
  const [value,setValue] = useState("0");
  const handleChange = c => setValue(c.target.value);
  const [text, setText] = useState('');

  return (
    <div className='post-form'>
      <div className='bg-primary p'>
        <h3>Say Something...</h3>
      </div>
      <div>
      <FormControl className = {classes.FormControl}>
        <InputLabel>Categorie</InputLabel>
        <Select onChange={handleChange}>
          <MenuItem value = {0}>General</MenuItem>
          <MenuItem value = {1}>Programming</MenuItem>
          <MenuItem value = {2}>Network</MenuItem>
          <MenuItem value = {3}>Electronic</MenuItem>
          <MenuItem value = {4}>Security</MenuItem>
          <MenuItem value = {5}>IOT</MenuItem>
        </Select>
      </FormControl>
      </div>
      
      <form
        className='form my-1'
        onSubmit={e => {
          e.preventDefault();
          addPost({ text,value });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Create a post'
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' className='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
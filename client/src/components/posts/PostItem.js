import React, { Fragment,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLike, removeLike, deletePost,approve} from '../../actions/post';
//import '../layout/theme.css';



const PostItem = ({
isAuthenticated,
approve,
addLike,
removeLike,
deletePost,
auth,
post: { _id, text, name, user, avatar, likes, comments, date,isApproved },
  showActions
}) => {
  
  const [buttonText, setButtonText] = useState("Approve");
  const [btnClasse,setBtnClasse] = useState("btn btn-success")
  
  function handleClick() {
    if (buttonText === "Approve") {
      setBtnClasse("btn btn-danger");
      setButtonText("Disapprove");
      //this.forceUpdate();
    } else {
      setButtonText("Approve");
      setBtnClasse("btn btn-success");
      //this.forceUpdate();
    }
  }

  useEffect(() => {
    
  }, []);
  return  (
    <div class="post bg-white p-1 my-1">
    <div>
      <Link to={`/profile/${user}`}>
        <img
          class="round-img"
          src={avatar}
          alt=""
        />
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p class="my-1">
        {text}
      </p>
       <p class="post-date">Posted on : 
          <Moment format='YYYY/MM/DD'>{date}</Moment>
      </p>

      {showActions && <Fragment>
        {isAuthenticated && (<button onClick = {e => addLike(_id)} type="button" class="btn btn-light">
        <i class="fas fa-thumbs-up">{' '}</i>
        <span>{likes.length}</span>
      </button>)}
      
      {isAuthenticated && (<button onClick = {e => removeLike(_id)} type="button" class="btn btn-light">
        <i class="fas fa-thumbs-down"></i>
      </button>)}
      
      <Link to={`/posts/${_id}`} class="btn btn-primary">
        Discussion 
        {comments.length > 0 &&(<span class='comment-count'>{comments.length}</span>)}
      </Link>

        {isAuthenticated ? (!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fa fa-times' />
            </button>
          )):<div></div>}

          
        
        {isAuthenticated && auth.user.isAdmin && (<button
              onClick={e => (approve(_id) && handleClick())
                
              }
              type='button'
              className={isApproved ? "btn btn-danger" : "btn btn-success" }
            >
              {isApproved ? "disapprove" : "approve"}
            </button>)}
        </Fragment>}
      
          
    </div>
  </div>
    
  );

  }
PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  isAuthenticated:PropTypes.bool,
  approve: PropTypes.func.isRequired,

};

const mapStateToProps = state => ({
  auth: state.auth,
  isAuthenticated : state.auth.isAuthenticated
  
});

export default connect(
  mapStateToProps,
  { addLike, removeLike, deletePost,approve }
)(PostItem);
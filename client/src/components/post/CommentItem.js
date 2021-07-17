import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { deleteComment } from '../../actions/post';

const CommentItem = ({
    isAuthenticated,
    postId,
    comment: { _id, text, name, avatar, user, date },
    auth,
    deleteComment
  }) => {
    return (
        <Fragment>
        <div className='post bg-white p-1 my-1'>
          <div>
            <Link to={`/profile/${user}`}>
              <img className='round-img' src={avatar} alt='' />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className='my-1'>{text}</p>
            <p className='post-date'>
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
            {isAuthenticated && !auth.loading && user === auth.user._id && (
              <button
                onClick={e => deleteComment(postId, _id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fa fa-times' />
              </button>
            )}
            {isAuthenticated && !auth.loading && auth.user.isAdmin && (
              <button
                onClick={e => deleteComment(postId, _id)}
                type='button'
                className='btn btn-danger'
              >
                <i className='fa fa-times' />
              </button>
            )}
          </div>
        </div>
        </Fragment>
      );
}

CommentItem.propTypes = {
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    isAuthenticated : state.auth.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { deleteComment }
  )(CommentItem);
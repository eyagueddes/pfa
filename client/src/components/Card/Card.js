import React from 'react'
import {Link, Redirect} from 'react-router-dom';
import './Card.css'
const Card = props => {
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.imageUrl}/>
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{props.title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.body}</p>
                </div>
            </div>
            <div className="btn1">
                <button >
                    <Link to={props.url}>
                        view more
                    </Link>
                </button>
            </div>
        </div>
    )
}

export default Card

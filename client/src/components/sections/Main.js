import React from 'react'
import aa from './aa.gif'
import gg from './gg.gif'
import g from './g.png'
import './section.css'
const Main = () => {
    return (
        <div>
        <img className="static" src={g} />
        <img className="active" src={gg} />
        
      </div>
      );
}

export default Main

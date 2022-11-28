import React from 'react';

export default (props) => {
import React from 'react';

export default (props) => {

  const style = {
    left: `${props.dot[0]}%`,
    top: `${props.dot[1]}%`
  }

  return (
    <div className="snake-food" style={style}></div>
  )
}
 

  return (
    <div className="snake-food"></div>
  )
}

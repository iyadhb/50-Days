import React, {useState} from 'react'

const Card = () => {
 const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  }
 return (
  <div className={isActive ? "panel active" : 'panel'} onClick={handleToggle}>
    <div>
   <h3>Explore The World</h3>
  </div>
  </div>
 )
}

export default Card

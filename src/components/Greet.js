import React from 'react'

const Greet = () => {

    const date = new Date();
    const hours = date.getHours();
    let timeOfDay ;
    if(hours < 12){
        timeOfDay = 'Morning';
    }
    else if(hours >= 12 && hours < 17){
        timeOfDay = 'Afternoon';
    }
    else if(hours >= 17 && hours < 23){
        timeOfDay = 'Evening';
    }
    else{
        timeOfDay = 'Night';
    }

  return (
    <span>
        <h1 className='text' style={{color : 'rgb(255, 31, 31)'}}>Good {timeOfDay}!</h1>
    </span>
  )
}

export default Greet
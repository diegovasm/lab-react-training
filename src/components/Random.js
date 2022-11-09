import React from 'react'



function Random(props) {



  return (
    <div className='random'>

    {`Random value between 1 and 6 => ${Math.floor(props.min + Math.random()*(props.max - props.min + 1))}`}
    </div>
  )
}

export default Random
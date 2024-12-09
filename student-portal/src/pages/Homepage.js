import React from 'react'
import img from '../images/profile.jpg'

export default function Homepage(props) {
  return (
    <div>
      <div className='top'>
        <img className="profile" src={img} alt="Logo" />
        <div className='top-middle'>
            Name:{props.name}<br/>
            Company Name:{props.company}<br/>
            Work Experience:{props.workexp}<br/>
        </div>
        <div className='top-bottom'>
        .......
        </div>
      </div>
      <div className='middle'>
        <div className='middle-left'>
        
        </div>
        <div className='middle-right'></div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

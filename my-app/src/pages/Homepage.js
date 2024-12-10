import React from 'react'
import img from '../images/profile.jpg'
import Charts from '../components/Charts'
export default function Homepage(props) {
  return (
    <div className='base'>
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
          <Charts />
        </div>
        <div className='middle-right'></div>
      </div>
      <div className='bottom'></div>
    </div>
  )
}

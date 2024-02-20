import React from 'react'
import './Home.css'
import Particle from './Particle'

function Home() {
  return (
    <div className='home'>
      <div className='container'>
        <div className='content'>
          <div className='col-1'>
            <h2 className='name'>Hello,</h2><br/><h2 className='name delay'>I'm Shivaramakrishnan</h2>
            <br/>
            <p className='subtitle'>Student, SKCET</p>
            <p className='subtitle-body'>Focused professional with good thinking and teamwork skills. 
              Aiming to leverage my abilities. Frequently praised as hard-working by my peers.</p>
          </div>
          <div className='col-2'>
            <Particle/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
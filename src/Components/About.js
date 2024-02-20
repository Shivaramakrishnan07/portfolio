import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
        
      <div className='about-division'>
      <div className='title'>
        <h1>Skills</h1>
      </div>
      
      <div className='container'>
        
        <div className='box three'>

          <div className='content'>
            <div className='technical'>
            <h2>Technical</h2>
              <ul style={{listStyleType:"none", margin:"1rem"}}>
                <li className='technical-item'>Programming Languages : C, C++, Java</li>
                <li className='technical-item'>Web Development : HTML, CSS, React JS, REST API using Spring Boot</li>
                <li className='technical-item'>Data Structures</li>
                <li className='technical-item'>Object-Oriented Programming</li>
              </ul>
            </div>
          </div>

        </div>


        <div className='box three'>

          <div className='content'>
            <div className='technical'>
            <h2>Interests</h2>
              <ul style={{listStyleType:"none", margin:"1rem"}}>
                <li className='technical-item'>Networking</li>
                <li className='technical-item'>Digital Electronics</li>
                <li className='technical-item'>Frontend Web Development</li>
                <li className='technical-item'>Circuit simulation</li>
              </ul>
            </div>
          </div>

        </div>
        
        {/* <div className='box three'>

          <div className='content'>
            <div className='technical'>
            <h2>Interests</h2>
              <ul style={{listStyleType:"none", margin:"1rem"}}>
                <li className='technical-item'>Networking</li>
                <li className='technical-item'>Digital Electronics</li>
                <li className='technical-item'>Frontend Web Development</li>
              </ul>
            </div>
          </div>

        </div> */}


      </div>
      </div>


      <div className='about-division'>

      <div className='title'>
          <h1>Projects</h1>
      </div>
      
      <div className='project-container'>

        <div className='box three'>

        <div className='content'>
          <div className='technical'>
          <h2>eBook Store</h2>
            <p className='technical-item'>Developed a webpage to view and manage eBooks.
            The inventory page shows the list of books available. Users can search any book by entering the eBook's title.
            eBooks' details can be added, updated and deleted.
            The frontend is made using React js. Spring Boot is used for backend and fetched using REST API.</p>
            <p className='technical-item'>Github : <a href='https://github.com/Shivaramakrishnan07/eBookStore'>https://github.com/Shivaramakrishnan07/eBookStore</a></p>
          </div>
        </div>

        </div>

        <div className='box three'>
          <div className='content'>
            <div className='technical'>
            <h2>Automatic Street Light Controller</h2>
              <p className='technical-item'>Developed and implemented an Automatic Street Light Controller in 2018, leveraging LDR technology to intelligently switch on street lights during night time,
                 enhancing safety and reducing energy consumption.</p>
            </div>
          </div>
        </div>

        <div className='box three'>
        
        <div className='content'>
          <div className='technical'>
          <h2>Task Management System - Current</h2>
            <p className='technical-item'>Idea : To develop a task management app where users can manage their tasks 
              by adding, updating and deleting. The tasks can be segregated based on priority.
              Basic Authentication is implemented using Spring Security</p>
          </div>
        </div>

        </div>

      </div>
      </div>

    </div>
  )
}

export default About
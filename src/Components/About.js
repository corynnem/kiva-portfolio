import React from 'react';
import Kiva from '../assets/kiva-photos/kivaFace.jpeg'
import './Components.css'


const About = () => {


  const underlineStyles = {
    color: 'black',
    textDecoration: 'none',
  }
  const abtStyles = {
    marginTop: '-19%'
  }
  const whoRUStyles = {
    
    marginRight: '-20%',
   
  }
    return (
        <div className="about">
          <img src={Kiva} style={{height: '30vh', zIndex: '-1'}} id='edit-img'/>
          <div style={abtStyles}>
            <div style={{ width: '50%', height: '5vh', marginLeft: '3vw', marginTop: '10%', zIndex: '5'}} > 
            <h1 className='who' style={whoRUStyles}>WHO ARE YOU?</h1>
            <h1 className='who' style={whoRUStyles} id='who2'>WHO ARE YOU?</h1>
            </div>
            <div style={{marginTop: '10%'}}>
              <h6>My name is Kiva LeFors. I am an eighteen year old self taught graphic designer since <u>2013.</u>Born in
              Louisiana and reside in Indiana. Currently attending the University of Cincinnati.
              <br></br>
              <br></br>
              I'm a passionate roller coaster enthusiast, film buff, and a lover of life 
              <br></br>
              <br></br>
              Click<a href=''><u style={underlineStyles}> here</u></a> for my resume
              </h6>
            </div>
          </div>
        </div>
    )
}

export default About;
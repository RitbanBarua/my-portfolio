import React from 'react'
import htmlLogo from '../assesets/HTML5.png'
import cssLogo from '../assesets/CSS3.png'
import jsLogo from '../assesets/JS.png'
import reactLogo from '../assesets/REACT 3D.png'

export default function Skills() {
  return (
    <>
      <section>
        <div className='container' id='skills-container'>
          <h2 className='section-title reveal'>Skills</h2>
          <div className="container" id='skills-img-container'>
            <div className='img-wrapper reveal' id="html-img-wrapper">
              <img src={htmlLogo} alt="HTML5" />
              <div className="hover-container">HTML</div>
            </div>
            <div className='img-wrapper reveal' id="css-img-wrapper">
              <img src={cssLogo} alt="CSS" />
              <div className="hover-container">CSS</div>
            </div>
            <div className='img-wrapper reveal' id="js-img-wrapper">
              <img src={jsLogo} alt="JAVASCRIPT" />
              <div className="hover-container">Javascript</div>
            </div>
            <div className='img-wrapper reveal' id="react-img-wrapper">
              <img src={reactLogo} alt="REACT" />
              <div className="hover-container">React</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

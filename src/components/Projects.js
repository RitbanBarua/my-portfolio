import React from 'react'
import ProjectSlider from './ProjectSlider'

export default function Projects() {
  return (
    <>
      <section id='projects'>
        <div className="container select-disabled" id='projects-container'>
          <h2 className="section-title reveal">Projects</h2>
          <div className="container reveal" id="projects-img-container">
            <ProjectSlider />
          </div>
        </div>
      </section>
    </>
  )
}

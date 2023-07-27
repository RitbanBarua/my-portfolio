import React from 'react'
import CountUp from 'react-countup';

export default function Marks() {
  return (
    <>
      <section id='marks'>
        <div className="container" id="marks-container">
          <h2 className='section-title reveal'>Marks</h2>
          <div className="container reveal" id="marks-count-container">
            <div className="marks-solo-container">
              <div className="marks-label"><h2>10-th</h2></div>
              <div className="marks-solo-count"><CountUp start={0} end={87} duration={5} enableScrollSpy ></CountUp>%</div>
            </div>
            <div className="marks-solo-container">
              <div className="marks-label"><h2>12-th</h2></div>
              <div className="marks-solo-count"><CountUp start={0} end={79} duration={5} enableScrollSpy ></CountUp>%</div>
            </div>
            <div className="marks-solo-container">
              <div className="marks-label"><h2>UG</h2></div>
              <div className="marks-solo-count"><CountUp start={0} end={8.55} decimal='.' decimals={2} duration={5} enableScrollSpy ></CountUp>/10</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

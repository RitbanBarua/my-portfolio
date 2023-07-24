import React from 'react'
import devImg from '../assesets/dev-img-2.png'
import TypedJS from './TypedJS'

export default function Intro() {
    
    return (
        <>
            <div className="container" id='intro-container'>
                <div className='reveal' id="intro-left">
                    <TypedJS strings={[`<h1>Hi, My Name Is <span id="name">Ritban Barua</span></h1>`,`<h1>And I am a passionate <span id="role">Web Developer</span></h1>`]}/>
                    <div className="btn-container" id="intro-btn-container">
                        <button className='btn'>Resume</button>
                        <button className='btn'>Github</button>
                    </div>
                </div>
                <div className='reveal' id="intro-right">
                    <img id='dev-img' src={devImg} alt="dev" draggable="false" />
                </div>
            </div>
        </>
    )
}

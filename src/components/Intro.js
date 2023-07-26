import React from 'react'
import devImg from '../assesets/dev-img-2.png'
import TypedJS from './TypedJS'

export default function Intro() {

    return (
        <>
            <div className="container" id='intro-container'>
                <div className='reveal' id="intro-left">
                    <TypedJS strings={[`<h1>Hi, My Name Is <span id="name">Ritban Barua</span></h1>`, `<h1>And I am a passionate <span id="role">Web Developer</span></h1>`]} />
                    <div className="btn-container" id="intro-btn-container">
                        <button className='btn'>
                            <i className="fa-solid fa-file"></i>
                            Resume
                        </button>
                        <a target='_blank' rel='noreferrer' href="https://github.com/RitbanBarua">
                            <button className='btn'>
                                <i className="fa-brands fa-github"></i>
                                Github
                            </button>
                        </a>
                    </div>
                </div>
                <div className='reveal' id="intro-right">
                    <img id='dev-img' src={devImg} alt="dev" draggable="false" />
                </div>
            </div>
        </>
    )
}

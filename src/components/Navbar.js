import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [dropdownState, setDropdownState] = useState(false);
  let current = "";

  const toggleNav = (e) => {
    e.preventDefault();
    document.getElementById('nav-hamburger-btn').classList.toggle('nav-btn-show');
    document.getElementById('nav-cross-btn').classList.toggle('nav-btn-show');
    (!dropdownState) ? setDropdownState(true) : setDropdownState(false);
  }

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("#nav-pc-links a")
    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id");
        }
        navLi.forEach((li) => {
          li.classList.remove("nav-li-active");
          if (li.classList.contains(current)) {
            li.classList.add("nav-li-active");
          }
        });
      });
    })
  }, []);


  useEffect(() => {
    const navbar = document.querySelector("nav");
    const dropdownMenu = document.getElementById("nav-dropdown-container");

    if (dropdownState) {
      dropdownMenu.classList.add("active");
      navbar.classList.add("nav-dropdown-active");
    } else if (!dropdownState) {
      dropdownMenu.classList.remove("active");
      navbar.classList.remove("nav-dropdown-active");
    }
  }, [dropdownState])


  // useEffect(() => {
  //   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  //   let interval = null;

  //   document.querySelectorAll(".nav-section-link").forEach(elem => {
  //     elem.onmouseover = event => {
  //       let iteration = 0;

  //       clearInterval(interval);

  //       interval = setInterval(() => {
  //         event.target.innerText = event.target.innerText
  //           .split("")
  //           .map((letter, index) => {
  //             if (index < iteration) {
  //               return event.target.dataset.value[index];
  //             }

  //             return letters[Math.floor(Math.random() * 26)]
  //           })
  //           .join("");

  //         if (iteration >= event.target.dataset.value.length) {
  //           clearInterval(interval);
  //         }

  //         iteration += 1 / 3;
  //       }, 30);
  //     }
  //   })
  // }, [])


  return (
    <>
      <nav>
        <div className="container" id="nav-container">
          <div id="nav-mob-btn-container">
            <button className='nav-btn nav-btn-show' id="nav-hamburger-btn" onClick={toggleNav}>
              <i className="fa-solid fa-bars fa-2xl" style={{ color: '#fff' }}></i>
            </button>
            <button className='nav-btn' id="nav-cross-btn" onClick={toggleNav}>
              <i className="fa-solid fa-xmark fa-2xl" style={{ color: '#fff' }}></i>
            </button>
          </div>
          <div className="btn-container" id='nav-pc-btn-container'>
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
          <div id="nav-pc-links">
            <a className='nav-section-link home nav-li-active' data-value="HOME" href="#intro-container">Home</a>
            <a className='nav-section-link skills' data-value="SKILLS" href="#skills-container">Skills</a>
            <a className='nav-section-link marks' data-value="MARKS" href="#marks-container">Marks</a>
            <a className='nav-section-link projects' data-value="PROJECTS" href="#projects-container">Projects</a>
            <a className='nav-section-link contact' data-value="CONTACT" href="#contact-page-container">Contact</a>
          </div>
        </div>
        <div className="container" id="nav-dropdown-container">
          <div id="empty">
            <div className="btn-container" id='nav-dropdown-btn-container'>
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
          <ul>
            <a className='nav-section-link' data-value="HOME" href="#intro-container"><li>Home</li></a>
            <a className='nav-section-link' data-value="SKILLS" href="#skills-container"><li>Skills</li></a>
            <a className='nav-section-link' data-value="MARKS" href="#marks-container"><li>Marks</li></a>
            <a className='nav-section-link' data-value="PROJECTS" href="#projects-container"><li>Projects</li></a>
            <a className='nav-section-link' data-value="CONTACT" href="#contact-page-container"><li>Contact</li></a>
          </ul>
        </div>
      </nav>
    </>
  )
}

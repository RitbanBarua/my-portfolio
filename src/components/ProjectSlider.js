import React, { useEffect } from 'react'
import AOKi from '../assesets/AOKi.png'
import WebBOOK from '../assesets/WebBOOK.png'
import TextUtils from '../assesets/TextUtils.png'

export default function ProjectSlider() {

    useEffect(() => {
        const track = document.getElementById("image-track");

        const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

        const handleOnUp = () => {
            track.dataset.mouseDownAt = "0";
            track.dataset.prevPercentage = track.dataset.percentage;
        }

        const handleOnMove = e => {
            if (track.dataset.mouseDownAt === "0") return;

            const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
                maxDelta = window.innerWidth / 2;

            const percentage = (mouseDelta / maxDelta) * -100,
                nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
                nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

            track.dataset.percentage = nextPercentage;

            track.animate({
                transform: `translate(${nextPercentage}%, -50%)`
            }, { duration: 1200, fill: "forwards" });

            for (const image of track.getElementsByClassName("image")) {
                image.animate({
                    objectPosition: `${100 + nextPercentage}% center`
                }, { duration: 1200, fill: "forwards" });
            }
        }

        /* -- Had to add extra lines for touch events -- */

        window.onmousedown = e => handleOnDown(e);

        window.ontouchstart = e => handleOnDown(e.touches[0]);

        window.onmouseup = e => handleOnUp(e);

        window.ontouchend = e => handleOnUp(e.touches[0]);

        window.onmousemove = e => handleOnMove(e);

        window.ontouchmove = e => handleOnMove(e.touches[0]);
    }, [])


    return (
        <>
            <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                <a draggable='false' target='_blank' rel='noreferrer' title='AOKi' href="https://aoki-anime.netlify.app/">
                    <img className="image" src={AOKi} alt='AOKi' draggable="false" />
                </a>
                <a draggable='false' target='_blank' rel='noreferrer' title='WebBOOK' href="https://web-book-app.vercel.app/">
                    <img className="image" src={WebBOOK} alt='AOKi' draggable="false" />
                </a>
                <a draggable='false' target='_blank' rel='noreferrer' title='TextUtils' href="https://textutils-pro.netlify.app/">
                    <img className="image" src={TextUtils} alt='AOKi' draggable="false" />
                </a>
                <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" alt='img' draggable="false" />
                <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt='img' draggable="false" />
            </div>

            {/* <a id="source-link" className="meta-link" href="https://camillemormal.com" target="_blank">
                <i className="fa-solid fa-link"></i>
                <span>Source</span>
            </a>

            <a id="yt-link" className="meta-link" href="https://youtu.be/PkADl0HubMY" target="_blank">
                <i className="fa-brands fa-youtube"></i>
                <span>7 min tutorial</span>
            </a> */}
        </>
    )
}

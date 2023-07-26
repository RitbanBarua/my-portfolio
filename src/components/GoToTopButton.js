import React, { useEffect } from 'react'

export default function GoToTopButton() {

    const goToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        const goTopBtn = document.getElementById("go-to-top-btn");

        const toggleGoTopBtn = () => {
            if (document.body.scrollTop > window.innerHeight ||
                document.documentElement.scrollTop > window.innerHeight) {
                if (goTopBtn !== null) {
                    goTopBtn.classList.add("go-to-top-btn-active");
                }
            } else {
                if (goTopBtn !== null) {
                    goTopBtn.classList.remove("go-to-top-btn-active");
                }
            }
        }

        window.onscroll = () => {
            toggleGoTopBtn();
        }
    }, [])


    return (
        <button id="go-to-top-btn" title="Go to top" onClick={goToTop}>
            <i className="fa-solid fa-chevron-up fa-xl" style={{ color: '#111' }}></i>
        </button>
    )
}

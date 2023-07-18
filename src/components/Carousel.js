import React, { useEffect } from 'react'

export default function Carousel() {

    useEffect(() => {
        const leftPerspectives = [
            { x: -10, z: -4 },
            { x: -20, z: -8 },
            { x: -30, z: -12 },
            { x: -40, z: -16 },
            { x: -50, z: -20 },
            { x: 10, z: -4 }
        ];

        const rightPerspectives = [
            { x: 10, z: -4 },
            { x: 20, z: -8 },
            { x: 30, z: -12 },
            { x: 40, z: -16 },
            { x: 50, z: -20 },
            { x: -10, z: -4 }
        ];

        const leftCards = document.querySelectorAll(".left .item");
        const rightCards = document.querySelectorAll(".right .item");

        const translateImage = (target, p) => {
            target.style.transform = `translate3d(${p.x}rem, 0, ${p.z}rem)`;
        };

        const animateCards = (c, perspectives) => {
            const count = parseInt(c.dataset.counter);
            translateImage(c, perspectives[count - 1]);
            c.dataset.counter = (count === 6 ? 1 : count + 1).toString();
        };

        const loop = () => {
            setInterval(() => {
                leftCards.forEach((c) => {
                    animateCards(c, leftPerspectives);
                });

                rightCards.forEach((c) => {
                    animateCards(c, rightPerspectives);
                });
            }, 1000);
        };
        loop();
    }, [])


    return (
        <>
            <div className="gallery">
                <div className="left">
                    <div className="inner">
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-01.webp" alt="test" data-counter="1" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-02.webp" alt="test" data-counter="2" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-03.webp" alt="test" data-counter="3" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-04.webp" alt="test" data-counter="4" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-05.webp" alt="test" data-counter="5" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-left-06.webp" alt="test" data-counter="6" />
                    </div>
                </div>

                <div className="right">
                    <div className="inner">
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-01.webp" alt="test" data-counter="1" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-02.webp" alt="test" data-counter="2" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-03.webp" alt="test" data-counter="3" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-04.webp" alt="test" data-counter="4" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-05.webp" alt="test" data-counter="5" />
                        <img className="item" src="https://kprverse.com/images/compressed/webp/collection/card-right-06.webp" alt="test" data-counter="6" />
                    </div>
                </div>
            </div>
        </>
    )
}

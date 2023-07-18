import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function TypedJS(props) {
    const { strings } = props;

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
        // eslint-disable-next-line
    }, [])


    return (
        <div className="typedjs-container">
            <span ref={el} />
        </div>
    )
}

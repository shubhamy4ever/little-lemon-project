import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const withScrollDirection = (WrappedComponent) => {
    return (props) => {

        const [scrollState, setscrollState] = useState("UP")

        let lastScrollTop = null;


        useEffect(() => {


            const handleScroll = (event) => {
                const scrollTopPosition =
                    window.pageYOffset || document.documentElement.scrollTop;

                if (scrollTopPosition > lastScrollTop) {
                    setscrollState("DOWN")
                } else if (scrollTopPosition < lastScrollTop) {
                    setscrollState("UP")
                }
                lastScrollTop =
                    scrollTopPosition <= 0 ? 0 : scrollTopPosition;
            }


            window.addEventListener('scroll', handleScroll)

            return (() => {
                window.removeEventListener('scroll', handleScroll)
            })
        }, [])


        return (
            <WrappedComponent {...props} scrollState={scrollState} />
        )
    }
}

export default withScrollDirection
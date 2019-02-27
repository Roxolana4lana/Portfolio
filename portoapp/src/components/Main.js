import React, { Component } from 'react'
import Video from './Video'

import IntroWords from './IntroWords'

import NavButton from './NavButton'
//import { Link, animateScroll as scroll } from "react-scroll";

export default class Main extends Component {

    render() {

        return (
            <React.Fragment>
                <div className="App container">
                    <div className='header-video'>
                        <Video />
                    </div>
                    <div className='header-intro' style={{ Zindex: '1' }}>
                        <div className='header-words'>
                            <IntroWords />
                        </div>
                        <NavButton />

                    </div>

                </div>

            </React.Fragment>



        )
    }
}
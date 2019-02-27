import React, { Component } from 'react'


export default class ButtonLink extends Component {
    render() {
        return (
            <div>
                <button className='hoveredLink' style={{ color: 'white' }}>
                    <a style={{ textDecoration: 'none', color: 'white' }} href='https://github.com/Roxolana4lana?tab=repositories'>
                        See the code
                    </a>
                </button>
            </div>
        )
    }
}

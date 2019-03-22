import React, { Component } from 'react'


export default class ButtonLink extends Component {
    render() {
        
        return (
            <div>
                <button className='hoveredLink' style={{ color: 'white' }}>
                    <a style={{ textDecoration: 'none', color: 'white' }} href={this.props.href}>
                        See the code
                    </a>
                </button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import ButtonLink from './ButtonLink'


export default class Image extends Component {
    constructor() {
        super()
        this.state = {
            isHovered: false
        }
    }

    handleHover = () => {
        this.setState({
            isHovered: true
        })
    }

    handleLeave = () => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }))
    }

    render() {
        console.log(this.props.href)
        let myButton = this.state.isHovered ? <div style={{ display: 'block' }}>
        <ButtonLink href={this.props.href}/> </div> : <div style={{ display: 'none' }}><ButtonLink /> </div>

        return (
            <div onMouseMoveCapture={this.handleHover} onMouseOut={this.handleLeave}>
                <h1>{this.props.title}</h1>
                <div className='seeImage' 
                style={{backgroundImage: `url(${this.props.name})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        position: 'relative' }}>
                    {myButton}
                </div>
            </div>
        )
    }
}

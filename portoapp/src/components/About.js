import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='About'>
                <h3 className='pAbout'>
                    I am working in:
                </h3>
                <div className='myIcons'>
                    <div className="theIcon"> <i className="fab fa-react "></i></div>
                    <div className="theIcon">   <i className="fab fa-sass "></i></div>
                    <div className="theIcon">   <i className="fab fa-css3-alt "></i></div>
                    <div className="theIcon">  <i className="fab fa-html5 "></i></div>
                    <div className="theIcon">  <i className="fab fa-js "></i></div>
                    <div className="theIcon">  <i className="fab fa-git "></i></div>
                </div>
            </div>
        )
    }
}

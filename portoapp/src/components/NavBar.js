import React, { Component } from 'react';
import { Link } from "react-scroll";
import NavButton from './NavButton';
class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            display: 'block',
            zIndex: '2'
        }
    }

    handleMy = () => {
        this.setState({
            display: 'none'
        })

    }
    render() {
        let lulu = this.state.display !== 'block' ? <NavButton /> : null

        return (
            <React.Fragment>
                <div className='NavBar' style={this.state} onClick={this.handleMy}
                >

                    <ul >
                        <li><Link to='home'
                            spy={true}
                            smooth={true}

                            duration={1000}
                        >Main</Link></li>
                        <li><Link to='about'
                            spy={true}
                            smooth={true}

                            duration={1000}
                        >Skills</Link></li>
                        <li><Link to='arrow'
                            spy={true}
                            smooth={true}

                            duration={1000}
                        >Projects</Link></li>
                        <li><Link to='form'
                            spy={true}
                            smooth={true}

                            duration={1000}
                        >Contact</Link></li>
                    </ul>
                </div>{lulu}
            </React.Fragment>
        )
    }
}

export default NavBar
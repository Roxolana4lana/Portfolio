import React, { Component } from 'react'


export default class ContactForm extends Component {
    constructor() {
        super()
        this.state = {
            mail: {
                recipient: 'roxolanapavlyk@gmail.com',
                sender: '',
                subject: '',
                text: ''
            }
        }
    }

    handleMailChange = e => {
        this.setState({
            mail: {
                ...this.state.mail,
                [e.target.name]: e.target.value
            }
        })
    }

    handleMailSubmit = e => {
        e.preventDefault()
        const { mail } = this.state
        fetch(`http://127.0.0.1:4000/send-email?
                recipient=${mail.recipient}
                &sender=${mail.sender}
                &subject=${mail.subject}
                &text=${mail.text}`)
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='mainForm'>
                <h1>Contact me </h1>
                <div className='myForm'>
                    <form onSubmit={this.handleMailSubmit}>
                        <div className="formPart">
                            <label>Email</label>

                            <input type='text'
                                value={this.state.mail.sender}
                                onChange={this.handleMailChange}
                                name='sender'/>
                        </div>
                        <br/>
                        <div className="formPart">
                            <label>Subject</label>

                            <input type='text'
                                value={this.state.mail.subject}
                                onChange={this.handleMailChange}
                                name='subject'/>

                        </div>
                        <br/>
                        <div className="formPart">
                            <label>Text</label>

                            <textarea
                                value={this.state.mail.text}
                                onChange={this.handleMailChange}
                                name='text'/>
                        </div>
                        <br/>
                        <button className='formButton'>Submit</button>
                    </form>
                </div>
                <div className='myContacts'></div>
            </div>
        )
    }
}

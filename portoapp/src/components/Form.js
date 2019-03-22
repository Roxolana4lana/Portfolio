import React, { Component } from 'react'


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            mail: {
                recipient: 'roxolanapavlyk@gmail.com',
                sender: '',
                subject: '',
                text: '',
            },
            senderError: '',
            subjectError:'',
            textError:'' 
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
    Validate = () =>{
        let senderError=""
        let subjectError=''
        let textError=''
        let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!valid.test(this.state.mail.sender)) {
          senderError= 'type a valid email'
        }
          if (!this.state.mail.subject || this.state.mail.subject.length < 5){
           
                  subjectError= 'minimum 5 characters'
          
          }
          if (!this.state.mail.text || this.state.mail.text.length < 5){
   
              textError = 'minimum 5 characters'
     
          }

         if(senderError || textError || subjectError){  
         console.log(this.state.senderError) 
            this.setState({
                senderError,
                subjectError,
                textError
            })
            return false
          }
          else{
              return true 
          }
           
        }


    handleMailSubmit = e => {
       e.preventDefault()
     const valid =  this.Validate()
        console.log(this.state.senderError) 
        if(valid){
            const { mail } = this.state
            fetch(`http://127.0.0.1:4000/send-email?
                recipient=${mail.recipient}
                &sender=${mail.sender}
                &subject=${mail.subject}
                &text=${mail.text}`)
                .catch(err => console.log(err))
                .then(console.log('it is ok'))
        }else
        console.log('not valid')  
    }

    render() {
     
        return (
            <div className='mainForm'>
                <h1>Contact me </h1>
                <div className='myForm'>
                    <form onSubmit={this.handleMailSubmit}>
                        <div className="formPart">
                            <label >Email</label>
                            <input type='text'
                                value={this.state.mail.sender}
                                onChange={this.handleMailChange}
                                name='sender'    
                            /> 
                        </div>
                        <div className='errorMessage'><div></div>{this.state.senderError}</div>
                        <br />
                        <div className="formPart">
                            <label>Subject</label>
                            <input type='text'
                                value={this.state.mail.subject}
                                onChange={this.handleMailChange}
                                name='subject'  
                            />
                        </div>
                        <div className='errorMessage'> <div></div>{this.state.subjectError}</div>
                        <br />
                        <div className="formPart">
                            <label>Text</label>
                            <textarea
                                value={this.state.mail.text}
                                onChange={this.handleMailChange}
                                name='text'  
                            />
                        </div>
                        <div className='errorMessage'><div></div>{this.state.textError}</div> 
                        <br />
                        <button className='formButton' >Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

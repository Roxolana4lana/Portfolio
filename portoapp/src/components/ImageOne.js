import React, { Component } from 'react'
import im1 from '../images/image1.png'
import im2 from '../images/image2.png'
import im3 from '../images/image3.png'
import im5 from '../images/im5.png'
import im4 from '../images/image4.png'
import Image from './Image'


export default class ImageOne extends Component {
    constructor() {
        super()
        this.state = {
            images: [
                {
                    'id': 1,
                    'name': im1,
                    'project': 'Recipe App',
                    'href': 'https://github.com/Roxolana4lana/recpies'
                },
                {
                    'id': 2,
                    'name': im2,
                    'project': 'Weather App',
                    'href':'https://github.com/Roxolana4lana/weatherApp'
                },
                {
                    'id': 3,
                    'name': im3,
                    'project': 'Expenses',
                    'href': 'https://github.com/Roxolana4lana/reduxexpenses'
                },
                {
                    'id': 5,
                    'name': im5,
                    'project': 'Image Gallery',
                    'href': 'https://github.com/Roxolana4lana/imageGallery/tree/master/imageapp'
                },
                {
                    'id': 4,
                    'name': im4,
                    'project': 'Portfolio',
                    'href': 'https://github.com/Roxolana4lana/Portfolio/tree/master/portoapp'
                }
            ],

            image: {
                'id': 1,
                'name': im1,
                'project': 'Wheather App',
                'href': 'https://github.com/Roxolana4lana/weatherApp'
            },
            index: 0
        }
    }

    render() {
        let myImage = this.state.images.map(i => (<div className="MyImage" key={i.id}> <Image href={i.href}name={i.name} title={i.project} /></div >))

        return (
            <div className='wrapper'>
                <h2>My projects</h2>
                <div className='theImage'>
                    {myImage}
                </div >
            </div>
        )
    }
}
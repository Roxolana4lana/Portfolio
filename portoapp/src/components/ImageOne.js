import React, { Component } from 'react'
import im1 from '../images/image1.png'
import im2 from '../images/image2.png'
import im3 from '../images/image3.png'
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
                    'project': 'Recipe App'
                },
                {
                    'id': 2,
                    'name': im2,
                    'project': 'Weather App'
                },
                {
                    'id': 3,
                    'name': im3,
                    'project': 'Expenses'
                },
                {
                    'id': 4,
                    'name': im4,
                    'project': 'Portfolio'
                }
            ],

            image: {
                'id': 1,
                'name': im1,
                'project': 'Wheather App'
            },
            index: 0
        }
    }

    render() {
        let myImage = this.state.images.map(i => (<div className="MyImage" key={i.id}> <Image name={i.name} title={i.project} /></div >))

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
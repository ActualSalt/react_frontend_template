import React from 'react'
import './Card.css'

function Card({title, imageURL, body}) {
    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageURL} alt='' />
            </div>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
            <div className='body-container'>
                <p>
                    {body}
                </p>
            </div>
        </div>
    );
}

export default Card

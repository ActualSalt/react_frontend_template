import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Title Here</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-9.jpg'
                    text='A man looks at water for the first time'
                    label='Label'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-2.jpg'
                    text='A couple attempts to sell drone shot even though the technology did everything'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='BP looks for another place to dump oil'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='A billionaire builds a soccer field on his island only to realize he has no friends'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/sign-up'
                    />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

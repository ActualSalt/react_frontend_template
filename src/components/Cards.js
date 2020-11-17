import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

const title01 = "A man stuck on a slippery rock while trying to look cool and couldn't come down for 26 hours";
const title02 = "A couple arrested for drawing \"male parts\" with the jetski only to be promptly released after the police couldn't find any drawings on the water"; 
const sand = " \"I don't like sand\" Darth Vader's weakness leaked and what it means to the rebels in desert planets";

function Cards() {
    return (
        <div className='cards'>
            <h1>Title Here</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-9.jpg'
                    text={title01}
                    label='Drama'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-2.jpg'
                    text={title02}
                    label='Crime'
                    path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='images/img-3.jpg'
                    text='BP looks for another place to dump oil'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem
                    src='images/img-4.jpg'
                    text='A billionaire builds a soccer field on his island only to realize he has no friends to play with'
                    label='True Story'
                    path='/products'
                    />
                    <CardItem
                    src='images/img-8.jpg'
                    text={sand}
                    label='Rebellion'
                    path='/sign-up'
                    />
                </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards

import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Experienced Doctors...!!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://media.npr.org/assets/news/2010/02/25/doctor-3900f8c9b6c5be80f3b2e509eafe9c41d7ad2671-s1100-c50.jpg'
              text='Explore the hidden world inside these books of fiction'
              label='Fiction'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Learn and Develop yourself from the knowledge of others!'
              label='Non-Fiction'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, in.'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, in.'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, in.'
              label='SelfHelp'
              path='/sign-up'
            />
            <CardItem
              src='images/img-1.jpg'
              text='lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, in.'
              label='Biography'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

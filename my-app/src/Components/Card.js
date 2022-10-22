import React from 'react';
import './Card.css';
import user from '../Assets/Images/user.png';
import group from '../Assets/Images/group.png';

export const Card = ({card, isActive, setUsage}) => {

    function handleCardSelect(){
        setUsage({'usage':card.id})
    }

  return (
        <div class="Card" onClick={handleCardSelect}
          style={{ border: isActive ? "2px solid #5A4AD1": "2px solid #e2ebf6" }}>
            <img style={{marginBottom:'0.7rem'}} 
            src={card.id === 1 ? user : group} 
            alt={card.title} height="20rem" width="20rem"/>
            <span class="Card__content__title">{card.title}</span>
            <span class="Card__content__text">{card.text}</span>
        </div>
  )
}
import React from 'react';
import './Button.css';

export const Button = ({ style, text, handleClick, tabNumber }) => {

  return (
    <Button type="submit" className="FormButton" style={style}
    onClick={handleClick}
    >{text}
    </Button>
  )
}

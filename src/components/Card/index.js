import React from 'react';
import './style.scss';

export default (props) => {
     const { style, year, pantone, text } = props;

    return (
    <div className='caja' 
    style={{
        ...style,
        }}
        >
        <span className='copiYear'>{year}</span>
        <span className='text'>{text}</span> 
        <span className='copiValue'>{pantone}</span>
    </div>
)}
   
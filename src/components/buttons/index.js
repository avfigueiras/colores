import React from 'react';
import './style.scss';

export default ({type, href, onClick, children}) => ( 

        <button className='btn' onClick={onClick} href={href}  type={type}>{children}</button>
 )


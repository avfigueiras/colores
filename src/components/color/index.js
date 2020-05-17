import React from 'react';
import './style.scss';
import { useHistory } from "react-router-dom";  
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default (props) => {
    const { name, color, year, pantone_value } = props;
    const history = useHistory();
    function handleClick(color, year, pantone) {
		history.push(`/items/${color.slice(1) || '#fff'}/${year || 1000}/${pantone || 1000}`);
    }
   
    return (
        <CopyToClipboard text={props.color}>
            <div className='box'
                onClick = { () => handleClick (
                    color,        
                    year, 
                    pantone_value
                )}
            >
                <span className='year'>{ year }</span>
                    <div className='color'>
                        <span>{ name }</span> 
                        <span className='num'>{ color }</span> 
                    </div>
                <span className='value'>{ pantone_value }</span>
            </div>
        </CopyToClipboard>
    )
};

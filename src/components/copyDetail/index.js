import React from 'react';
import Card from '../Card/index';
import Layout from '../Layout/index';
import Boton from '../buttons/index';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

const Detail = (props) =>{
    const { color, year, pantone } = props.match.params;

    return (  
        <Layout>
            <Card 
            text = '¡Copiado!'
            year = {year}
            pantone = {pantone}
            style ={{ backgroundColor:`#${color}`,marginBottom:'2px'}}
            />
            <div className='action'>
                <div className='boton'>
                    <NavigateBefore className='icon'  onClick={back}/><Boton onClick={back}> Anterior</Boton>
                </div>
                <div className='boton'>
                    <Boton onClick={next}> Siguiente</Boton><NavigateNext className='icon' onClick={next}/>
                </div>
            </div>
        </Layout> 

    )
}

export default Detail;
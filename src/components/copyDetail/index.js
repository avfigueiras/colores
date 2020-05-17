import React from 'react';
import Card from '../Card/index';
import Layout from '../Layout/index';
import Boton from '../buttons/index';

const Detail = (props) =>{
    const { color, year, pantone } = props.match.params;

    return (  
        <Layout>
            <Card 
            text = '¡Copiado!'
            year = {year}
            pantone = {pantone}
            style ={{ backgroundColor:`#${color}`}}
            />
            <div className='action'>
                <Boton> Anterior</Boton>
                <Boton> Siguiente</Boton>
            </div>
        </Layout> 

    )
}

export default Detail;
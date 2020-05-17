import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import './style.scss';
import Color from '../color/index';
import Boton from '../buttons/index';

const ListColors = (props) =>{
    const [colors, setColors] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() =>{
        axios.get(`https://reqres.in/api/colors?page=${page}`)
        .then(res => {
            setColors(res.data.data);
        })
    },[page])

    const back = () => {
        page > 1 && setPage(page - 1);
    }
    const next = () => {
        page <=1 && setPage(page + 1);
    }
    
    return(
    <Fragment>
        <div className='container'>
            <div className= 'wrapper'>
                {colors.length > 0 ? colors.map((color,i) => (
                    <>
                    <div key={i} className='element' style={{backgroundColor:`${color.color}`}}>
                        <Color  id={colors.id}
                            year = {color.year}
                            name ={color.name}
                            color ={color.color}
                            pantone_value ={color.pantone_value}
                            value={color.color}
                        />
                    </div> 
                    </>
                ))
                :
                <span>No existen colores disponibles</span>
                }
            </div>
        </div>
            <div className='action'>
                <Boton onClick={back}> Anterior</Boton>
                <Boton onClick={next}> Siguiente</Boton>
            </div>
            
    </Fragment>
    )
}

export default ListColors;
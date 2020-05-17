import React,{useEffect, useState, Fragment} from 'react';
import axios from 'axios';
import './style.scss';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
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
                    <div key = {i} className='element' style={{backgroundColor:`${color.color}`}}>
                        <Color  
                            year = {color.year}
                            name ={color.name}
                            color ={color.color}
                            pantone_value ={color.pantone_value}
                            value={color.color}
                        />
                    </div>
                ))
                :
                <span>No existen colores disponibles</span>
                }
            </div>
        </div>
            <div className='action'>
                <div className='boton'>
                    <NavigateBefore className='icon'  onClick={back}/><Boton onClick={back}> Anterior</Boton>
                </div>
                <div className='boton'>
                    <Boton onClick={next}> Siguiente</Boton><NavigateNext className='icon' onClick={next}/>
                </div>
            </div>
            
    </Fragment>
    )
}

export default ListColors;
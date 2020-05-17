import React,{useEffect, useState, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import useStyles from './style.js';
import Title from '../header/index';
import Boton from '../buttons/index';


export default function SpacingGrid() {
  const classes = useStyles();
  const [colors, setColors] = useState([]);
  const [page, setPage] = useState(2);

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
      page <=1 && setPage(page+1);
  }

  return (
    <Fragment>
       <Grid container className={classes.root} >
         <Title />
          {colors.map((value, index) => (
            <Grid key={index} item xs={12} sm={6} lg={4} >
                <div className={classes.paper} style={{background: value.color}}>
                    <Typography className={classes.year} >{value.year} </Typography >
                    <div className={classes.name}>
                    <Typography >{value.name}</Typography>
                    <Typography >{value.color}</Typography>
                    </div>
                    <Typography className={classes.pantone}>{value.pantone_value} </Typography >
                </div>
            </Grid>
          ))}
           <div className={classes.action}>
             <div className={classes.boton}>
                 <NavigateBefore className={classes.icon}  onClick={back}/><Boton onClick={back}>Anterior</Boton>
             </div>
             <div className={classes.boton}>
                <Boton onClick={next}>Siguiente</Boton><NavigateNext className={classes.icon} onClick={next}/>    
              </div>
          </div>
        </Grid>    
    </Fragment>
  );
}

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
      fontWeight:'900',
      color: '# 000',
      fontZise:'1',
      boxSizing:'border-box',
      justifyContent:'center',
    },
    paper: {
      height: 240,
      margin: 5,
      borderRadius:'10px',
      padding:'4px',
      fontSize:'16px',
      display:'flex',
      flexDirection:'column',
      border:'1px solid grey',
    },
    name:{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      minHeight:'auto',
      height:'33.33%',
      
    },
    pantone:{
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'flex-end',
        width:'100%',
        height:'33.33%',
    },
    year:{
        alignSelf:'flex-start',
        width:'100%',
        height:'33.33%',
    },
    title:{
        width:'99%',
        padding:'10px',
        display:'flex',
        justifyContent:'center',
        borderRadius:'10px',
        border:'1px solid grey',
        fontSize:'20px'
    },
    action:{
        border:'1px solid grey',
        borderRadius:'10px',
        width: '99%',
        display: 'flex',
        justifyContent: 'space-between',
        height:'30px',
    },
    boton:{
    display:'flex',
    justifyContent:'flex-start',
    },
    icon:{
      width:'20px',
      height:'100%',
    }
  }));

  export default useStyles;
import { makeStyles } from "@material-ui/core";
import React, { Dispatch, SetStateAction, FC } from "react"
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Character } from "../Model";
import { useBetween } from "use-between"
import { AiOutlineHeart } from 'react-icons/ai';


export type People={
    name:string, 
    surname: string, 
    desk:string, 
    imgUrl:string
}



const generateFontSizeByNameSurname=(name:string, surname:string)=>{
const {length}= `${name} ${surname}`
return 30-length;
}




// const Card=({props}: {props: People})=>{
// return (
//     <>
//         <div className="singleImg">
//             <img className="imgCard" src={props.imgUrl} alt="img" />
//             <div>
//                 <h4 style={{color:"red", fontSize:generateFontSizeByNameSurname(props.name,props.surname )}}>  {props.name} {props.surname}</h4>
//                 <h5>{props.desk}</h5>
//             </div>
//         </div>
    
//     </>
// )
// }
// Dispatch<SetStateAction<number | null>>
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  
  type CardImgProps={character:Character, deleteOnClick: (_:number)=>void, addOnClick: (_:number)=>void}

const CardImg: FC<CardImgProps> = ({character, deleteOnClick, addOnClick})=> {
    const classes = useStyles();
  let [elev, setElev]= React.useState(2 as 2 | 10);
  let [isFavor, setIsFavor]= React.useState(false);
    return (
      <>
      <Card elevation={elev}  onMouseEnter={(_)=>setElev(10)} onMouseLeave={(_)=>setElev(2)} className="singleImg">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={character.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
            {character.name}
            </Typography>
            <Typography variant="h5" color="textSecondary" component="p">
            {character.type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button onClick={()=> deleteOnClick(character.id)} variant="contained" size="small" color="primary">
            Delete
          </Button>
          <Button onClick={()=> addOnClick(character.id)}  size="large" variant="contained" color="primary">
            <AiOutlineHeart/>
          </Button>
        </CardActions>
      </Card>
     </>
    );
  }

export default CardImg

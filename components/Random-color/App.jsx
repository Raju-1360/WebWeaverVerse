import './style.css';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import { IoIosColorFill } from "react-icons/io";
import { IoIosColorWand } from "react-icons/io";

export const RandomColor =()=>{
    //const [color, setColor] = useState('#000000');

    
const[hex, setHex]=useState('#000000');




    const handler=()=>{

      
        


// 0123456789abcdef
        let randomNumber;

        let color= new Map([ 
            [ 0,'0'],
            [1,'1'],
            [2,'2'],
            [3,'3'],
            [4,'4'],
            [5,'5'],
            [6,'6'],
            [7,'7'],
            [8,'8'],
            [9,'9'],
            [10,'a'],
            [11,'b'],
            [12,'c'],
            [13,'d'],
            [14,'e'],
            [15,'f']


        ]);

        let value='#';

       

        for(let i=0; i<6; i++){
          randomNumber=Math.floor(Math.random()*16);

          value=value + color.get(randomNumber)

        }
        
        {  document.body.style.background=value}
     


  


    }
    const handlerRGB=()=>{

       
        let randomNumber ;
       
        let value=[];

        for(let i=0; i<3; i++){
            randomNumber= Math.floor(Math.random()*255);
            value.push(randomNumber)




        }
   
    

{document.body.style.background=`rgb(${value.join(",")})`}

console.log(rgb)


    }

 
   

    

    return(
        <>
        <div className="main"> 
        
<h1 style={{color:(document.body.background="white"?"blue":"white")}}> <IoIosColorWand style={{rotate:"180deg" ,marginTop:"20px" ,color:"white"}} /> ColorFrenzy <IoIosColorFill style={{marginLeft:"10px", color:"gold"}} /> </h1>        

   
        <Button style={{color:"white", background:"blue"}}   size='small' onClick={handler}   variant="outlined">Toggle Hex Color</Button>


        <Button  size='small'  style={{margin:"20px", color:"white", background:"blue"}} onClick={handlerRGB} variant="outlined">Toggle RGB Color</Button>
        
                
        </div>
        
        </>


    )




}
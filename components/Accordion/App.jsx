import data from "./data.js"; // Import the data correctly

import {useState }from 'react'
import './style.css'
import { FaChevronDown } from "react-icons/fa";
import { IoIosSwap } from "react-icons/io";
import { Button, Typography } from '@mui/material';
export const Accordion = () => {

    const[selected , setSelected] =useState(null);
    const [enable, setEnable] = useState(false);
    const[multipleSelection, setMultipleSelection] =useState([])
    console.log(enable)
    const handler=(setID)=>{
       
        setSelected(setID==selected?null:setID)
        
    }
const buttonText=enable ? 'Disable Multiple Select' : 'Enable Multiple Select';

    const multi=(id)=>{
       


        if(enable){
          
            

            if(multipleSelection===null || multipleSelection.length===0){ 
              setMultipleSelection([id]);
        
            }
            else if(multipleSelection.includes(id)){

                setMultipleSelection((prev)=>{
                    return prev.filter(item=>item!==id)
                })
            }
            else{
                setMultipleSelection((prev)=>[...prev,id])

            }
           
        }
        console.log(multipleSelection)


    }

    return (
        <> 
       
        
          
  
       <Button  style={ {marginLeft:"40vw"}}variant="contained"   onClick={()=>!setEnable(!enable)}>{buttonText} <IoIosSwap style={{marginLeft:"10px"}}/></Button>
            <div className="accordion">
            
                <div className="box"> 
                {
                    data && data.length > 0 
                    ? data.map((item) => (
                        <div className="item" key={item.id}>
                            <div className="title" onClick={()=>{handler(item.id); multi(item.id)}}  >
                                <h3>{item.question}  <span style={{alignItems:"end", margin:"10px"}}> <FaChevronDown  /> </span> </h3>  
                                <div className="answer">


                                    { enable && multipleSelection.includes(item.id)?
                                    
                            <p>{item.answer}</p>
                    
                               :null
    }
                            { 
                               
                                
                              
                            selected===item.id &&!enable ?
                            <p>{item.answer}</p>
                    
                            :null


                            }
                            </div>
                            </div >
                        
                        </div>
                    ))
                    : <div><h3>Data not found</h3></div>
                }
                </div>

            </div>
        </>
    );
};

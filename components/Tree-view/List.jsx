import { useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { FaAngleUp } from "react-icons/fa";


export const TreeView=({item})=>{
    const[show,setShow]=useState(true)
return(
    <>  
    
      <ul style={{listStyle:"none"}}> 

    
      <li  onClick={()=>setShow(!show)}> {  item.label} { item.subMenu && item.subMenu.length >0 ? 
          
            show &&  show==true ? <BiMenuAltLeft /> : <FaAngleUp />
        
      
      :null} </li> 
      </ul>
     

    {   item.subMenu && item.subMenu.length  >0 && !show ?
      <ul>
        {item.subMenu.map((item,index)=>{
            return <TreeView key={index} item={item}/>

  
        })}



      </ul>
    
    
    :null                }

    
    
    </>


)



}
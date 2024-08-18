import Data from './data.js'
import { TreeView } from './List.jsx'
import { IoMdMenu } from "react-icons/io";
import './style.css'
import { useState } from 'react';
export const  Treeview=()=>{
    const[menu,setMenu]=useState(false)


    return(
        <> <h1 style={{textAlign:"center"}}>My Tree View Menu</h1>
         <div>  <IoMdMenu size={20}  onClick={()=>{setMenu(!menu);   }}   />  </div> 
   
        { Data.menu && Data.menu.length >0 && menu ? 
        <div className='main' > 
            {  Data.menu.map((item,index)=>
               <TreeView key={index} item={item}/>
            
            )}
           
                
          
        
        
        
        </div>
        :null}
    
        
        
        </>


    )
}
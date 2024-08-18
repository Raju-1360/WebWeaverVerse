import { useState } from "react"
import  QRCode  from 'qrcode.react';
import { BsQrCodeScan } from "react-icons/bs";

export const Qr=()=>{

    const[code,setCode]=useState('')
    const[input,setInput]=useState('')
    const[visible,setVisible]=useState(false)
    console.log(code)

    const handler=(e)=>{
        e.preventDefault()
        const value = e.target.value;

        if(value.trim()===''){
            setVisible(false)
        }

        setInput(value)
        


    }
    const submit=()=>{

      
        if(input.trim()){ 
        setCode(input)

        setVisible(true)
        }
   


    }
    
return(
    <>
       <div style={{marginLeft:"30vw"}} className="main">
        <h1>QR code Generator <BsQrCodeScan  size={20}/> </h1>
        <div>
            <input type="text" onChange={handler} /> <button   onClick={submit}> submit</button>

        </div> 
        <br />
        
           {visible && <QRCode size={128} value={code}    /> }
         
          
          
            



       </div>
    </>
)

}
import { useEffect, useState } from "react"
import { GiProgression } from "react-icons/gi";


export const ScrollIndicator = ({url})=>{

    const[product ,setProduct]=useState([])
    const[loading,setLoading]=useState(false);
     const[scroll,setScroll] =useState("");
    async function fetchproduct(geturl){
  
        try{
            setLoading(true)
            let response = await fetch(geturl);
            let data = await response.json();

            console.log(data)

            if(data && data.products.length >0 ){
                setProduct(data.products) ;
                    setLoading(false)   
        }
      
            console.log(` prdouct-->${product}`)

        }
        catch(e){
          
            console.log(e)
            console.log(`there is a n error`)
        }


    }



    useEffect(()=>{

        fetchproduct(url)

    },[url])

    const handler = () => {
        const howMuchScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
        setScroll((howMuchScroll / height) * 100);
        console.log(scroll);  
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => {
          window.removeEventListener('scroll', handler);
        };
      }, []);
    return(
        <> 
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${scroll}%`,
            height: '5px',
            backgroundColor: 'blue',
            zIndex: 100,
            transition: 'width 0.25s ease-out',
          }}
        ></div>
          <div> <h1 style={{position:"fixed", marginLeft:"35vw", marginTop:"-15px"}}>Page Scroll Indicator <GiProgression size={22} /></h1></div> 
         <div className="products"> 
        {  product.map((item, index) => (
        <div key={index}>
          <h2>{item.title}</h2>
        </div>
      ))}
      </div>
              
        
        
         


        
        </>


    )


}
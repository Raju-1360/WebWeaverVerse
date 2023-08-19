
console.log("hello world ");

 let texarea= document.getElementsByClassName("textarea")[0];

let text = document.getElementById("text");
let total = document.getElementById('count');
let remaining = document.getElementById('Remaining');
let btn=document.getElementById('btn');
let limte=document.getElementsByTagName('h2')[0];
let intervalID;

text.addEventListener('keyup', () => {
    if(remaining.innerHTML<'200'){
        
        limte.innerHTML="";
        
    }

  


    if(text.value.length==200){
       
  intervalID =  setTimeout(()=>{
    
   
        limte.innerHTML=" Character Limit Exceeded 🚫";
   

       },1000)
     

    }

    total.innerHTML = text.value.length;
    remaining.innerHTML=text.getAttribute('maxLength')-text.value.length;
});
 btn.addEventListener('click',()=>{
  
  
    
    clearInterval(intervalID);
    limte.innerHTML="";

    text.value="";
    total.innerHTML="0";
    remaining.innerHTML="200";


 })
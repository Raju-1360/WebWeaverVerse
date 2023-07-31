console.log("Hello world its me Raju ");


let head=document.getElementsByTagName('h2');
let container =document.querySelector('.container');
let color=document.querySelectorAll('.color');
let para=document.getElementsByTagName('p');


let body=document.querySelector('body');
let Object={
    red:"🔥",
    orange:"🎃 " ,
    yellow: "🌞 ",
    green :" 🍀 ",
    blue:" 🐬 ",
    violet: "💜 ",
    indigo: "🌌 "

}

let random=Math.ceil(Math.random());
console.log(random);


const image='https://img.freepik.com/free-photo/colorful-landscape-with-moon-sky_1340-27126.jpg?size=626&ext=jpg&ga=GA1.1.1666481584.1688567593&semt=ais_ai_generated';






color.forEach(element=>{
    element.addEventListener('mouseenter',function(e){
       
       
            container.style.backgroundColor=e.target.id;
        
        body.style.backgroundImage=`url(${image})`;
        
        
        para[0].innerHTML=Object[e.target.id];
       
     head[0].style.color=e.target.id;
   
       
        
        
    });
});



container.addEventListener('mouseleave',function(e){
    container.style.backgroundColor="white";

    head[0].style.color="black";
   body.style.backgroundImage='none';
   para[0].innerHTML="";


})



/*
If you want to continously want to change background color then enable this code 
let bodys=document.querySelector('body');
let colors=function changedBg(){
    let hexColor='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color +=hexColor[parseInt(Math.random()*16)];
    
    }bodys.style.backgroundColor=color;
    
    heading.style.color=color;
    heading.style.backgroundColor="black";
    
    
   
    return color;
    }
setInterval(colors,1000);

*/


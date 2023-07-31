console.log("hello its me Raju ");


let body=document.querySelector('body');
let heading=document.querySelector('h1');

let colors=function changedBg(){
let hexColor='0123456789ABCDEF';
let color='#';
for(let i=0;i<6;i++){
    color +=hexColor[parseInt(Math.random()*16)];

}body.style.backgroundColor=color;

heading.style.color=color;
heading.style.backgroundColor="black";


// heading.style.textShadow="6px 6px red";
return color;
}
let objects={
    0:'😄',
    1:'😄',
    2:'😍',
    3:'😎',
    4:'😊',
    5:'😁',
    6:'😆',
    7:'😋',
    8:'😐',
    9:'😭',
    10:'😂',
    11:'😆',
    12:'😺',
    13:'😆',
    14:'😁',
    15:'🙈',
    16:'😁',
    17:'🙈',
 
   
};
let para=document.querySelectorAll('.head p');
function emoji(){
let random2=parseInt(Math.random()*16)



para[0].innerHTML=`${objects[random2]}`;
}
setInterval(emoji,1000);

setInterval(colors,1000);
let headtwo={
    1:'Colors are the smiles of nature, spreading joy and beauty throughout the canvas of life. 🌈 ',
    2:'Colors are the paintbrushes of the soul, creating a masterpiece that illuminates the world with beauty. ',
    3:'Colors paint the canvas of life, turning ordinary moments into extraordinary masterpieces',
    4:'Colors are the brushstrokes of life, painting our world with beauty and filling our hearts with joy.',
    5:'Embrace the vibrant hues of life s canvas, for in every shade, lies a symphony of possibilities. Let the colors inspire you to paint your dreams with courage and passion, creating a masterpiece of success and joy. 🎨💪😊',
    6:'Life is like a canvas, and you hold the brush. Embrace the vibrant colors of determination, brush away doubts, and paint your dreams with unwavering passion. Each stroke is a step closer to the masterpiece that is your future. 🎨✨',
   
};
let headingtwo=document.querySelector('h2');

function Changing(){

    let random=parseInt(Math.random()*6+1);
    console.log(random);
    headingtwo.innerHTML=`${headtwo[random]}`;
}
setInterval(Changing,5000);

      





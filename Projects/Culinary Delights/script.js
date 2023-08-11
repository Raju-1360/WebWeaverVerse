



let mealName=document.getElementById('meal');
let input= document.getElementById('input');
let sumit=document.getElementById('submit');
let image=document.getElementById('image');
let category=document.getElementById('category');
let area=document.getElementById('location');
let receipe=document.getElementById('view');

let inner=document.querySelector('.innerbox');
let box=document.getElementById('box');
let ingre=document.getElementById('ingre');


let magic=document.querySelector('.magic');

let ingredient=document.getElementById('Ingreident');
let Youtubes= document.getElementById('Youtube');
let instruction=document.getElementById('Instruction');
let tab=document.getElementById('tab');
let videos=document.getElementById('youtubeVideo');

const ytElement = document.querySelector('.yt');
let boxes=document.querySelector('.boxes');
let tabes=document.querySelector('.tab');
let para=document.getElementById('para');




let api="https://www.themealdb.com/api/json/v1/1/search.php?s=";






let i=0;

function myMeal(){
   
    let search=input.value;
    boxes.style.display="block";
    
    


fetch(api+search)
.then((response)=>{
    if(!response.ok)
    throw Error("Not ok");
    para.innerHTML=`Check Your Internet Connection or try later`;


    return response.json();

})
.then((data)=>{
   let meal=data.meals[0];
   
   let Instructiones= meal.strInstructions;
   
    
    let images=meal.strMealThumb;

 
    image.src=images;
    let video= meal.strYoutube;
  
    let mealNames= meal.strMeal;
  
    mealName.innerHTML=`Dish :${mealNames}`;
    let categorys=meal.strCategory;
    
    category.innerHTML=` Classification:-${categorys}`;
    let areas= meal.strArea;

    area.innerHTML=`Culinary Flavors of the Locale: ${areas}`;
    

  
        
    ingredient.addEventListener('click',(e)=>{
        magic.style.display='flex';
   ingre.innerHTML="";

   magic.style.height='70%';
   magic.style.width='80%';

boxes.style.position='relative';

   magic.style.position = 'relative';
   
   tabes.style.position='relative';

   magic.style.marginLeft='0%';
   
   
   
    


let meales = data.meals;

for (let i = 1; i <= 20; i++) {
    const ingredient = meales[0]['strIngredient' + i];
    const measure = meales[0]['strMeasure' + i];
    
    if (ingredient && ingredient.trim() !== '') {
       
        ingre.innerHTML += `Ingredient ${i}: ${ingredient}`;
ingre.innerHTML += `.    Measure : ${measure}<br/>`;

        
    }

    
   

}});

instruction.addEventListener('click',(e)=>{
    ingre.innerHTML="";
    
   magic.style.height='50%';
   magic.style.width='90%';
   magic.style.marginLeft='0%';


   


    ingre.innerHTML=`${Instructiones}`
});
Youtubes.addEventListener('click',(e)=>{
 
   
    
 
    ingre.innerHTML="";
    magic.style.height='20%';
    magic.style.width='40%';
    magic.style.marginLeft='30%';
    ingre.innerHTML=ytElement.innerHTML;


    videos.href=video;
   
});
magic.style.display='none';


});

}





input.addEventListener('keypress',myMeal );
let slagon= document.getElementById('para');
let toogle=true;
setInterval(function(){

    if(!toogle){
        slagon.innerHTML='Culinary Delights';
    }
   else { slagon.innerHTML=` Where Every Bite is a Journey`;}
  toogle=!toogle;


},2000)

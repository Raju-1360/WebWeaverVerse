console.log("hey");
const btn=document.getElementById('btn');
const para=document.getElementById('joke');




  const apikey = "aoM0jyPN6usmlz0ac+TKOQ==6mCe29Jjel610DoL"; // Replace with your actual API key
const apiurl = "https://api.api-ninjas.com/v1/jokes?limit=";

const options = {
  method: "GET",
  headers: {
    "x-api-key": apikey,
  },
};

function jokes(){
  // btn.disabled=true;
  try{
  btn.style.display="none";

  para.style.color="green";
  para.innerHTML="Loading...";
  fetch(apiurl, options)
.then((response)=>{
    if(!response.ok){
        throw Error("newtork issue");
    }
    return response.json();
})
.then((data)=>{
  para.style.color="";
 
  para.innerHTML=data[0].joke;
  btn.style.display="";

 
    console.log(data[0].joke)
})
.catch((error)=>{
    console.log("error");
})
  console.log("clicked");
}
catch(error){
  para.style.color="red";
  para.innerHTML="An Error occurred.please try after some time";
}


}

btn.addEventListener('click',jokes);
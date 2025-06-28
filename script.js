const button=document.querySelector(".btn");
const image=document.querySelector(".img");
const url="https://dog.ceo/api/breeds/image/random/3";

async function fetchHandler() {
  try{
const response=await fetch(url);
const data=await response.json();
image.src = data.message[0]
  }catch(error){
    console.error( error);
  }
}

button.addEventListener("click",()=>{
    fetchHandler();
})
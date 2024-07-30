const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle"); 
let t=true;
toggle.addEventListener("click", ()=>{
  container.classList.toggle("dark");
  
 if(t){
  toggle.style.background = "white"
  t=false;
 }else{
  toggle.style.background = " #353535"
  t = true;
 }
    

});
var plus=document.querySelectorAll(".plus");
var minus=document.querySelectorAll(".minus");
var nbrep=document.querySelectorAll(".nbrep");
var total=document.querySelector(".total");
var totalprix=document.querySelectorAll(".totalprix");
var prix=document.querySelectorAll(".prix");
var remove=document.querySelectorAll(".remove");
var heart=document.querySelectorAll(".heart");


function testplus(event) {

    ++event.target.nextElementSibling.innerText;
      
   }
function testminus(event) {
    if(event.target.previousElementSibling.innerText>0) 

  {--event.target.previousElementSibling.innerText;} 
      
  }

function testtotal(event) {

    for(let i=0; i<plus.length; i++){

if(nbrep[i].innerText>=0)
{totalprix[i].innerHTML=parseInt(nbrep[i].innerText)*parseInt(prix[i].innerText)}

    }
}

function testcommande(event) {
var nbrep=document.querySelectorAll(".nbrep");
var total=document.querySelector(".total");
var totalprix=document.querySelectorAll(".totalprix");
   total.innerHTML=0;
    for(let i=0; i<nbrep.length; i++)
    
        {total.innerHTML=parseInt(total.innerHTML)+parseInt(totalprix[i].innerText);} 
        }

    
  
function testremove(event) {
        
            event.target.parentElement.parentElement.parentElement.remove();
            testcommande(event)
            
            }
         
for(let i=0; i<plus.length; i++){
    plus[i].addEventListener('click', testplus); 
    minus[i].addEventListener('click', testminus);
    minus[i].addEventListener('click', testtotal);
    plus[i].addEventListener('click', testtotal); 
    minus[i].addEventListener('click', testcommande);
    plus[i].addEventListener('click', testcommande); 
    remove[i].addEventListener('click',testremove); 
}

   
   for(let i=0; i<heart.length; i++){

    heart[i].addEventListener('click',(event)=>
   

        event.target.style.color = "red"
    
     );}
     for(let i=0; i<heart.length; i++){

        heart[i].addEventListener('dblclick',(event)=>
       

            event.target.style.color = "black"
        
         );}
            


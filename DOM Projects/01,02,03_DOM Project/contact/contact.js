let form= document.querySelectorAll('form') ;
form[1].addEventListener('submit' , (x) => {x.preventDefault();
  let name= document.querySelector('.userName');
  let email= document.querySelector('.userEmail');
  let msg= document.querySelector('.userMessage');

  let on=document.querySelector('.enterName');
  let oe=document.querySelector('.enterMail');                                                  
  let om= document.querySelector('.enterMessage');

   on.value= name.value;                                         
   oe.value= email.value;
   om.value= msg.value ;
                        })
let myForm= document.querySelectorAll('form') ;
myForm[1].addEventListener('submit' , (event) => {
  event.preventDefault();
  let name= document.querySelector('.userName');
  let email= document.querySelector('.userEmail');
  let message= document.querySelector('.userMessage');

  let setName=document.querySelector('.enterName');
  let setEmail=document.querySelector('.enterMail');                                                  
  let setMessage= document.querySelector('.enterMessage');

   setName.value= name.value;                                         
   setEmail.value= email.value;
   setMessage.value= message.value;
})
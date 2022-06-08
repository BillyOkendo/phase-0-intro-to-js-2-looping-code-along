// Code your solutions in this file
function writeCards(names, eventName) {

    const messages = [];
    
     for (let count = 0; count < names.length; count++) {
   
       const message = `Thank you, ${names[count]}, for the wonderful ${eventName} gift!`;
   
       messages.push(message);
     }
     
     return messages;
   
   }
   
   console.log(writeCards([], ''));
   
   function countDown(){
       let countDown = 10;
       while (countDown){
           
           console.log(countDown--);
       }
   console.log(countDown);
   }
   console.log(countDown());
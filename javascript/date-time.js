//alert("hello");
//No 1: Create a javascript application that will take input from user and display how old they are
// let user =eval( prompt("please fill in the year you were bone"));
// dateofbirth = new Date();

// console.log(dateofbirth);
// currentage = dateofbirth.getFullYear()-user;
// document.getElementById("age").innerText = "You are now " +currentage +" Years Old"

// No2: create a javascript application that will display how many days,months,
//and years left for buhari to leave the office
 let countDown = new Date("may 29,2023 12:30:00");
 let count = setInterval(function(){
     let presentDate = new Date().getTime();
     let difference = countDown - presentDate;

     let Days = Math.floor(difference/(1000*60*60*24));
     //console.log(Days);
     let Months = Math.floor(difference/ (1000 * 60 *60 * 24 * 30));
     //console.log(Months)
     let Years = Math.floor(difference/(1000 * 60 * 60 * 24 * 365));
     //console.log(Years)
     let Mintues = Math.floor(difference % (1000 * 60 * 60)/1000 * 60);
     //console.log(Mintues);
     let Seconds = Math.floor(difference%(1000*60)/1000);
     console.log(Seconds);

 });

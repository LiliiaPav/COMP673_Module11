//STEP 1
// let today=new Date();
// let month = today.getMonth() 
// let year = today.getFullYear()
// let result = new Date(year, month, 0).getDate();
// console.log(`In this month ${result} days`) 

//STEP 2

// let today=new Date();
// let month = today.getMonth() 
// const monthNames = ["January", "February", "March", "April", "May", "June",
//   "July", "August", "September", "October", "November", "December"
// ];
// console.log(`Today is ${monthNames[month]}`) 

//STEP 3
// let today=new Date();
// if(today.getDay()===0 || today.getDay()===6){
//     console.log('Weekend!!')
// }
// else{
//     console.log('NOT weelend. Go to work!');
// }

//STEP 4
// const daysNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// let today=new Date();
// let now = today.getDay();
// if (now===0){
//     console.log(daysNames[6]);
// }
// else{
//     console.log(daysNames[now-1]);
// }

//STEP 5

const daysNames=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let today=new Date();
let now = today.getDay();
console.log(daysNames[now].charAt(0));
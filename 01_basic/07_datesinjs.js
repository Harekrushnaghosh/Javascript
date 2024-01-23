// Dates
 //let mydate = new Date()

 //console.log(mydate.toDateString());
 //console.log(mydate.toLocaleDateString());
 //console.log(mydate.toLocaleString());
 //console.log(typeof mydate);


 //let myCreatedDate = new Date(2024,0, 23, 14,11)
 //console.log(myCreatedDate.toLocaleString());


 let myCreatedDate = new Date ("01-23-2024");
 console.log(myCreatedDate.toLocaleString());


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);
 console.log(myCreatedDate.getTime());
let newdate = new Date()

console.log(newdate);
console.log(newdate.getMonth() + 1);
console.log(newdate.getFullYear());
console.log(newdate.getDay() + 1);
console.log(newdate.getTime());

newdate.toLocaleString("default",{
    weekday:"long"
})





 
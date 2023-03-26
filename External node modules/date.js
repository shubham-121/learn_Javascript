//*****************************************external date module for the TODO app*********************************************//


// module.exports.getDate=getDate;  //not using  getDate() because we are not activating the function here.

// // console.log(module);

// function getDate()
// {
//     var today=new Date();

// var options={
//     weekday:"long",
//     day: "numeric",
//     month: "long"
// }

// var day=today.toLocaleDateString("en-US",options)

// return day;
// }


// module.exports.getDay=getDay; 
// function getDay()
// {
//     var today=new Date();

// var options={
//     weekday:"long",
   
// }

// var day=today.toLocaleDateString("en-US",options)

// return day;
// }

// console.log(module.exports);


              //writting all code in short format 





exports.getDate=function() 
{
    var today=new Date();

  var options={
    weekday:"long",
    day: "numeric",
    month: "long"
   }

return today.toLocaleDateString("en-US",options)

}


exports.getDay=function()
{
    var today=new Date();

var options={
    weekday:"long",
   
}

return today.toLocaleDateString("en-US",options)


}

console.log(module.exports);

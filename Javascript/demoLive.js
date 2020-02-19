// // console.log(5+6);

// const myArray =   [ 
        
//           { 
//              "name":"name",
//              "zip_code":"50700",
//              "state":"state",
//              "country":"country"
//           }
       
//     ];

// var output = '';
// for (var property in myArray) {
//   output += property + ': ' + myArray[0].property +'; ';
    
// }



// // document.getElementById("demoLive").innerHTML = myArray[0].zip_code;
// document.getElementById("demoLive").innerHTML = myArray.toString();


//Linear Search JavaScript Practice

const linArr = [5, 4, 3, 2, 6, 8, 11, "pop"];

const linObj = {
   firstnum : 1,
   seconnum : 2,
   thirdnum : 3,
   forthnum : 4,
   fifthnum : 5
};


function printAll(arr){
   for(i = 0; i < arr.length; i++){
      document.getElementById("demoLive").innerHTML = linArr[i];
   }
}
document.getElementById("demoLive").innerHTML = printAll(linArr);

let animals = ['🐔', '🐷', '🐑', '🐇'];
let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

for (let animal of animals) {
  // Random name for our animal
  let nameIdx = Math.floor(Math.random() * names.length);

  console.log(`${names[nameIdx]} the ${animal}`);
}

// Henry the 🐔
// Melvin the 🐷
// Henry the 🐑
// Billy Bob the 🐇
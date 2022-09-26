============SECOND HOMEWORK========
   // function sum(...numbers) {
//     let numberSum = 0; 
//     for(let item of numbers) 
//      if (item > 0) {
//         numberSum+=item;
//        }
//  return numberSum;
//  }
//  let result = sum(2, -9, 5, 11, -30, 100, 8, -11, -4, 5, -6, 8);
//  console.log(result);


// =====homework2=====

// function sum(...numbers) {
//     let numberSum = 0; 
//     for(let item of numbers) {
//      numberSum+=item;
//     }
//  return numberSum;
//  }
//  let result = sum(10, 50, 6, 7, 8, 11, 6, 3, 9);
//  console.log(result);




// =====homework3=====

// let user = {
//     firstname: 'giorgi', 
//     lastname: 'saakadze',
//     age: 32,
//     isLoggedIn: true
// }

// function namereturn(x, y) {
//     return x + " " + y;
// }

// let newusername = namereturn(user.firstname, user.lastname);
// console.log(newusername);




// =====homework4=====






// =====homework5=====

// let array = [1,2,4,10,34,5,7,87];
//  for(let item of array){
//    if(0 < item && 10 > item){
//        console.log(item);
//     }
// }


// =====homework6=======

// let numbers =[1,2,3,4,5,6,7,8,9,10];
//  for(let item of numbers){
// if(5 == item){
//      console.log(item);
//      }
//     }







// ------homework1=======

// let user = {
//     firstname: 'giorgi',
//     lastnAme: ' smith',
//     age: 25,
//     studentstatus: 'active'

// };
// console.log(user.studentstatus);
//  for 

// let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
//  for ( let a =0; a < numbers.length; a++) {
//     console.log(numbers[a]);
//  }
// //  while
//  let i = 0;
//  while(i < numbers.length) {
//  console.log(numbers[i]);
//    i++
//    }

//    homework3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];
for (let item of numbers){
   
     if (item >5){
        console.log(item);
        }
    }


    // homework4

    let user = {
        name: 'giorgi', 
        age: 20,
        studentstatus: 'active'
    };
    if(user.age <18) {
        console.log('hello');
    }  else if (user.name === 'levan') {
        console.log('hello levan');
    } else if (user.studentstatus === 'active' || user.age < 25){
        console.log('hello world');
    } else{console.log('error');}


    // ----------homework5------

    // let array = ['watermelon', 'pear', 10, 45, 50, 'apple', 'ananas']; {
    //     console.log(array [0], array [1], array [5], array [6]);
    // }
       

    // ----homework6-----

    // let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]; {
    //     console.log(array [0] [0], array [0][2], array [0][3], array [1] [0], array [1] [3], array [2] [2]);
    // }
    

    // =====homework7====

    let array = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]; 
    // for (item of array) {
    //        if (item % 2 == 1) {
    //            console.log(item);
    //        }
    //      };  კენტი რიცხვები

    for (item of array) {
        if (item % 2 == 0) {
            console.log(item);
        }
        };
    //     ლუწი რიცხვები


    // ======homework 8====
    let users = [
        { username: 'giorgi', status:'false'},
        { username: 'levani', status:'false'},
        { username: 'anna', status:'true'},
    ];
    console.log(users[2].status);



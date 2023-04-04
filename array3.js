 //1.Write a function that accepts an array of strings and console.logs each element using a for loop.
 let str = ["Girl","Boy","Man","Woman","father"]; 
 arry(str)
function arry (str){
         for ( i =0;i < str.length ;i++){  
          console.log(str[i]) ;     
}
}
// arry()

//2.Write a function that accepts an array of numbers and uses the forEach() 
//method to console.log each number multiplied by 2.


let nums = [20,45,100];
multiply(nums);

function multiply(Arr) {
    Arr.forEach(function(number) {
      console.log(number * 2);
    });
  }
  //3.Write a function that takes in an array of numbers and consoles 
  //the first four items multiplied by 8 and the last two added by 5. 
  //Console the array with the new values

  let arr1 = [4,8,1,9,10,87];
change(arr1); 

function change(item) {
   
    for (let i = 0; i < 4; i++) {
      item[i] = item[i] * 8;
    }
  
    let lasttwo= item.length - 1;
    item[lasttwo] += 5;
    item[lasttwo- 1] += 5;

    console.log(item);
}

// 4.Write a function that takes in the following array and use a while loop to iterate and 
//break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
takesIn(arrNum);

function takesIn(array) {
    let i = 0;
    while (i < array.length) {
      if (array[i] === array[4]) {
        break;
      }
      console.log(array[i]);
      i++;
    }
  }

  //5.Write a function that takes in a an array of strings and use a 
  //continue statement when the item is at the second index
let fruits= ['apple','plum','banana','strawberries','kiwi']
statement(fruits);

function statement(array) {
    for (let i = 0; i < array.length; i++) {
      if (i === 2) {
        continue; 
      }
     
   
      console.log({"continue":array[i]})
    }
  }

/*
1-Write a function called tallEnoughToRide  that takes an array of people objects, 
and returns a an array of names of people who are greater than or equal to 48 inches in height.

You can assume an input which looks like this:

var groupA = [
  {
    name: "Mia",
    age: 10,
    heightInInches: 52
  },
  {
    name: "Jaya",
    age: 9,
    heightInInches: 45
  },
  {
    name: "Kiana",
    age: 10,
    heightInInches: 55
  },
  {
    name: "Alex",
    age: 11,
    heightInInches: 48
  }
]
Calling your function should result in:
tallEnoughToRide(groupA); //["Mia", "Kiana", "Alex"];

Remember: your function should work off of the data it receives, 
not a global variable or only the specific example above. 
I.e. If someone called your function with 10 objects 
(with all safely have the same properties), it should work just as well.
*/
function each(coll,f){
  if(Array.isArray(coll)){
    for(var i=0; i<coll.length; i++){
      f(coll[i],i);
    }
    for(var key in coll){
      f(coll[key],key);
    }
  }
}

function filter(coll,predicate){
var acc=[];
if(!Array.isArray(coll)){
  acc={};
}
each (coll,function(element,key){
  if(predicate(element,key)){
    acc[key]= element;
  }
})
return acc;
}


function tallEnoughToRide(array){
  return filter(array,function(element,key){
    if(element.heightInInches >= 48){
      return element.name 
    }
  });
}
/*
2-Working off of the same data structure as tallEnoughToRide, 
write a function called tallestPerson that takes  an array of people objects as well, 
and returns the name of the person with the greatest height, 
along with how tall they are (see sample input below).

Calling your function should result in:

tallestPerson(groupA); //"Kiana at 55 inches"


*/

// your answer is here
function reduce(arr,f,acc){
  if(acc===undefined){
    acc=arr[0];
    arr=arr.slice(1);
  }
  each(arr,function (element,i){
   acc=f(acc,element,i);
  });
  return acc;
}


function tallestPerson(array){
  return reduce(array,function(element,key){
     if(acc<element.heightInInches){
     acc = element.heightInInches 
   }
   return acc.name + "at "+ acc + " inches"
  });
}

modifyed




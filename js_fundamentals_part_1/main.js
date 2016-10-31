//go trough each value in the arrayx, where x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei']. Log each value.
var x = [3, 5, 'Dojo', 'rocks', 'Michael', 'Sensei'];
for(var i = 0; i < x.length; i++){
    console.log(x[i]);
}

//Push 100 into array
x.push(100);
console.log(x);

//Add a new array ["hello", "world", "JavaScript is Fun"] to variable x

var y = ["hello", "world", "JavaScript is Fun"];
x.push(y);
console.log(x);


// Create a simple for loop that sums all the numbers between 1 to 500.

var sum = 0;
for(var i =0; i <= 500; i++){
    sum += i
}
console.log(sum);

//Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value.

var myarray = [1, 5, 90, 25, -3, 0]
var minval = 0;
for(var i = 0; i < myarray.length; i++){
    if(minval > myarray[i]){
      minval = myarray[i];  
    }    
}
console.log(minval);


//write a loop that wil go through the array [1, 5, 90, 25, -3, 0], find the average.
var add = 0;
var count = 0;
for (var i = 0; i < myarray.length; i++){
    add +=myarray[i];
    count ++
}
var average = add/count;
console.log(average);

var new_ninja ={
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'Javascript',
    dojo: 'dallas'
}
console.log(new_ninja.name, new_ninja.profession, new_ninja.favorite_language, new_ninja.dojo);


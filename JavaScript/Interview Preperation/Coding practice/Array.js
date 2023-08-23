//1 destructuring
// const data = ["Ajay","James"];
// const [y,z] = data; // this type it takes the index values
// const [a] = data;
// console.log(y);0
// console.log(a);
// console.log(z);

//2 only take second index parameter
// const data = ["Ajay","James","Akash"];
// const[ ,y,z] = data
// console.log(y,z)

//3 remove first element -- change the main array
// let data = [1,2,3,4,5,6];
// console.log(data.pop())
// console.log(data.shift()); 
// removes first element and returns it
// console.log(data);

//4 last element =  data.pop and return it --- change the main array

//5 ---- delete array and index will delete the data from that index
// let data = [1,2,3,6,7,8,9] 
// delete data[1]; //length will be same
// console.log(data); //data on the 1st index will be empty
// console.log(data.length);

//6 merge two array--- sill the data be changed like object
// let data1 = [1,2,3,5,6]
// let data2 = [1,2,3,5,7,...data1]
// let c = [...data1,...data2];
// console.log(c); // repeated data wont be deleted


//7
// const numbers = [1,3,2];
// numbers[5] = 14;
// console.log(numbers); // return two empty istems on the missinng index

//8
// const numbers = [1,3,2];
// numbers[9] = numbers; //9th pos par ek array daal dia matlab infinite pos tak ek jaisa aaray bnega jisme 9th pos p same array hoga
// console.log(numbers);

//9
// .length ------ metthod count karega total agar 4 hai to 4 hi dega
// .push ----- last element pe dalega ------ performant
// .pop ----- last element pe nikalega ----- performant
// .unshift ----- top mein dalega hoga  ------  less performant
// .shift ----- top mein nikala ------ less performant

//10 ------Looping----------
//for
//while

//11 fuctions for looping
//map
//filter
//reduce
//every
//some
//find


// for (let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let i=0;
// while(i < arr.length) {
//     console.log(arr[i])
//     i++
// }

// map takes a callback ------ first item ----- second index ----- third is the array

// let numbersArr = [1,2,3,4,5,6,7,8,9];

// const newNums = numbersArr.map((item, index, array) => {
//     return item + 5;
// })
// console.log(newNums)

// filter
// let numbersArr = [1,2,3,4,5,6,7,8,9];
// let filterr = numbersArr.filter((item)=>{
//     return item>4
// })
// console.log(filterr)

//reduce -- reduce the array in one value
// let numbersArr = [1,2,3,4,5,6,7,8,9];
// const reduced = numbersArr.reduce((prev,item)=>{
//    return prev+item
// },0)
// console.log(reduced)

// some -- filter ki tarah hi hai bas true aur false return karta hain
// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const somee = numbersArr.some((item) => {
//   return item > 10;
// });
// console.log(somee);

//every -- if every items has conditions gives ------ true or false
// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const everye = numbersArr.every((item) => {
//   return item > 0;
// });
// console.log(everye);


//find -- returns the first variable which satisfies the condition
// let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const everye = numbersArr.find((item) => {
    //   return item > 5;
    // });
    // console.log(everye);


//findindex -- gives the index of given value takes a callback
// let arr = ["Apple", "banana","Cherry","Guava","Orange"]
// let ar1 = arr.findIndex((item) => {
    // return item === "banana"
// })
// console.log(ar1)

    
// Spread and rest operators
// let numbersArr1 = [1, 2, 3, 4];
// let numbersArr2 = [5, 6, 7, 8, 9];
// let numberArr = [...numbersArr1,...numbersArr2] Spread operator
// let numberArr = numbersArr1.concat(numbersArr2)
// console.log(numberArr)

//slice --- slice the array
// let arr = ["Apple", "banana","Cherry","Guava","Orange"]
// const arr1 = arr.slice(-2)
// console.log(arr1)

// splice -- modifies the existing array--- first arg is to start second is how much to delete and third is what to add from that index
// let arr = ["Apple", "banana","Cherry","Guava","Orange"]
// arr.splice(1,2,"kiwi","babugosha","Jamun")
// console.log(arr)

//fill -- change the original array with the data provided --- first is or the value and second is for the starting index
// let arr = ["Apple", "banana","Cherry","Guava","Orange"]
// arr.fill(0,2)
// console.log(arr)


//Flat -- it removes all the inner array and make a single array---not for 2 layer nesting
// const numbers = [1,2,[3,4,[5,6]],7,[8]]
// const flatened = numbers.flat(2);
// console.log(flatened);

// reverse----changes the original array
// const nums = [1,2,3,4,5,6,7,8,9]
// const nums2 = nums.reverse()
// console.log(nums2)
// console.log(nums)

//sort 
// const unsorted = [5,8,1,8,2,5,9,11,56]








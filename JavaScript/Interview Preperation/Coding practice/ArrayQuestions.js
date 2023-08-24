// Second largest number
// 1,45,22,78,44,66,77,454,77

// function secondLargest(arr) {
//   if (arr.length === 1) {
//     console.log("only one element");
//   } else {
//     const uniq = Array.from(new Set(arr));
//     uniq.sort((a, b) => b - a);
//     console.log(uniq[1]);
//   }
// }

// secondLargest([1, 66, 9, 44, 76, 22, 76, 88]);

//Optimized Solution

// function secondOptimized(arr) {
//   let largest = -1;
//   let secondLargest = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }

// console.log(secondOptimized([1, 66, 9, ,90,44, 76, 22]));

//Q2 Rotate the array by k

// The following is an array of 10 students ages:
// 1-const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// 2- Sort the array and find the min and max age
// 3- Find the median age(one middle item or two middle items divided by two)
// 4- Find the average age(all items divided by number of items)
// 5- Find the range of the ages(max minus min)
// 6- Compare the value of (min - average) and (max - average), use abs() method

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24] //1

    // 2 Sort the array and find the min and max age
    ages.sort((a, b) => {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    })
    
    const minAge = ages[0];
    const maxAge = ages[ages.length - 1];
    console.log(`The minimum age is: ${minAge} and maximum age is: ${maxAge}`);
    
    
    // 3 Find the median age(one middle item or two middle items divided by two)

    const medianAge = (ages[ages.length / 2] + ages[(ages.length / 2) - 1]) / 2;
    console.log(`The median age is: ${medianAge}`)
    
    
    // 4 Find the average age(all items divided by number of items
    let total = 0;
    ages.forEach(items => {
        total += items;
    })
    const averageAge = total / ages.length;
    console.log(`The average age is: ${averageAge}`);
    
    // 5 Find the range of the ages(max minus min)
    const Range = ages[ages.length - 1] - ages[0];
    console.log(`The Range is ${Range}`);
    
    // 6 Compare the value of (min - average) and (max - average), use abs() method
    const minMinusAverage = Math.abs(ages[0] - averageAge);
    const maxMinusAverage = Math.abs(ages[ages.length - 1] - averageAge)
  
    if (minMinusAverage > maxMinusAverage) {
        console.log("min-average is greater than max-average")
    } else if (minMinusAverage < maxMinusAverage) {
        console.log("max minus average is greater than min-average");
    } else {
        console.log("Both are equal");
    }
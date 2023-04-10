// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in metre. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// - The same groups apply to both men and women.
// - Underweight: BMI is less than 18.5
// - Normal weight: BMI is 18.5 to 24.9
// - Overweight: BMI is 25 to 29.9
// - Obese: BMI is 30 or more

//User data
let weight = 10
let height = 1.8 

const bmi = weight/(height*height)
console.log(bmi)



    if(bmi<18.5){

        console.log("You are underweight")
    }

    else if(bmi>=18.5 && bmi<=24.9){

        console.log("You are in normal weight range")
    }
    
   
    else if(bmi>=25.0 && bmi<=30.0){

        console.log("You are overweight")
    }
    
   
    else if(bmi>=30.0){

        console.log("You are obese")
    }
    
 
    
   




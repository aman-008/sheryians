// // Generate random otp
// console.log(Math.trunc(Math.random()*9000)+ 1000);


// // Reverse a 3-letter string manually.

// let word = "bat";
// if(word.length < 4){
//     let first_word = word[0];
//     let second_word = word[1];
//     let third_word = word[2];
//     console.log(third_word + second_word + first_word);
// }


// // Find the last character of a string.

// let word = "rlallrjlje";
// console.log(word[word.length-1]);


// // Convert a full name into uppercase initials.

// let word = "fjlafdafl";
// console.log(word.toUpperCase())


// // Check whether two strings are equal ignoring case sensitivity.
// let word1 = "watermelon";
// let word2 = "watermelon";

// if(word1 == word2){
//     console.log("Equal");
// } else{
//     console.log("Not Equal");
// }



// Create a simple login validation system.
// let username = "jatin";
// let password = 1234;

// if(typeof(username) === "string" && typeof(password) === "number"){
//     console.log("Welcome ", username);
// } else{
//     console.log("Enter the valid credentials");
// }


// // Find whether a number is a 2-digit or 3-digit number.
// let num = 9;

// if(num >= 10 && num < 100){
//     console.log("2-digit number.");
// }else if(num >= 100 && num < 1000){
//     console.log("3-digit number.");
// } else{
//     console.log("Enter a valid number.")
// }

// // Create a mini ATM balance checker.
// let pin = Number(prompt("Enter the 4 digit pin: "));
// let userChoice = prompt("Enter Your Choice: ");
// let currentBalance = 50000;

// if(pin === 1234){
//     console.log("Choose 1 option");
//     console.log("1. deposit\n2.withdrawal\n3.currentBalance");
//     if(userChoice == "deposit"){
//         let deposit = Number(prompt("Enter the deposit amount: "));
//         console.log("Your deposit amount is: ", deposit, "\nYour current amount is: ", deposit+currentBalance);
//     } else if(userChoice == "withdraw"){
//         let withdrawal = Number(prompt("Enter the withdrawal amount: "));
//         console.log("Your withdrawal amount is: ", withdrawal,"\nYour current balance is: ", currentBalance-withdrawal);
//     } else{
//         console.log("Your Current balance is: ", currentBalance);
//     }
// }else{
//     console.log("Enter the correct PIN");
// }


// // Simulate a traffic light system using switch.
// let light = "blue";
// switch(true){
//     case (light == "green"):
//         console.log("You can go.");
//         break;
//     case (light == "red"):
//         console.log("You have to stop.");
//         break;
//     case (light == "orange"):
//         console.log("Slow down or get ready");
//         break;
//     default:
//         console.log("Invalid light");
// }


// 

let studentName = "Aman";

let math = 85;
let science = 78;
let english = 92;

let totalMarks = math + science + english;
let maxMarks = 300;

let percentage = (totalMarks / maxMarks) * 100;

let grade;
let result;

if (math < 33 || science < 33 || english < 33) {
    result = "Fail";
    grade = "F";
} else {
    result = "Pass";

    if (percentage >= 90) {
        grade = "A+";
    } else if (percentage >= 80) {
        grade = "A";
    } else if (percentage >= 70) {
        grade = "B";
    } else if (percentage >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }
}

console.log("----- Marksheet -----");
console.log("Student Name:", studentName);

console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);

console.log("Total Marks:", totalMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");

console.log("Grade:", grade);
console.log("Result:", result);
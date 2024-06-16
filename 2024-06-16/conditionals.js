//If
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
}

//If else 
age = 16;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// else if 

let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// switch
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}


let d = 7

if (d === 1) {
    console.log("Monday");
} else if (d === 2) {
    console.log("Tuesday"); 
} else if (d === 3) {
    console.log("Wednesday");
} else {
    console.log("Invalid day");
}



/*

Exercises:
Write an if-else statement to check if a number is positive, negative, or zero.
Use else-if to categorize a person’s age into different life stages (child, teenager, adult, senior).
Create a switch statement to print the name of a day based on its number (1 for Monday, 2 for Tuesday, etc.).
 */
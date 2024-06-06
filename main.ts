// //                   // Assignment 1: Building Your Friend List

// // // Task: Create a program that manages a simple friend list.
// // // 1. Define an object named people containing an empty array called friends.
// // // 2. Create three separate objects, each representing a friend, with properties like firstName,
// // // lastName, and optionally id.
// // // 3. Add these friend objects to the friends array within the people object.
// // // 4. Output the entire people object to the console, displaying your information and your
// // // friend list.

let people:any = {
    friends: []
}

 

let friend1 =  {
    firstName:"shifa",
    lastName:"sheraz",
    id:2534
}


let friend2 = {
    firstName:"uzma",
    lastName:"rasheed",
    id:4643
}

let friend3 = {
    firstName:"atiqa",
    lastName:"A.razaque",
    id:7545
}

let add = people.friends=[friend1,friend2,friend3]

console.log(add);


           // Assignment 2:Manipulating an Array: Rearranging Words

// // // // Objective:
// // // // Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
// // // // Steps:
// // // // 1. Scrambled Array:
// // // // o Start with an array of elements in a scrambled order, like:

// // // // const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
// // // // • Modify the Array:
// // // // • Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
// // // // o Convert non-strings (booleans, numbers) to strings if needed.
// // // // o Split elements into character arrays (optional).
// // // // o Rearrange characters or elements in the desired order (modify original array or
// // // // create temporary arrays).

// // // // • Output the Result:
 // • Use join() to combine elements back into a single string: "I am a student of GIAIC".


const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2,2);
scrambledArray.pop();
scrambledArray.unshift("i");
scrambledArray.splice(1,0, "am", "a");
const modifiedsentence=scrambledArray.join(" ");
console.log(modifiedsentence);





// //             // Assignment 3: Company Product Catalog


// // // Task: Create a program to represent a product catalog using an array and perform basic queries.
// // // 1. Define an array named inventory to store product information.
// // // 2. Create three separate objects, each representing a product, with properties like name,
// // // model, cost, and quantity.
// // // 3. Add these product objects to the inventory array using an appropriate array method.
// // // 4. Access and log the quantity property of a specific product (e.g., third product) in the
// // // inventory array.
// // // 5. Explore adding and accessing more elements within the inventory array to understand
// // // how to manage product data.

let inventory:{name:string,model:number,price:number,quantity:number}[]=[]

let product1= {
    name:"laptop",
    model:2021,
    price:30999,
    quantity:4
}

let product2 ={
    name:"smartphone",
    model:2023,
    price:40000,
    quantity:8

}

let product3 ={
    name:"camera",
    model:2019,
    price:15000,
    quantity:3
}
inventory.push(product1 , product2 , product3);
console.log(inventory[2] .quantity);

Object.defineProperty(product2,"expiry",{value: "3 years"});
console.log(`Name: ${inventory[0].name}\nCost Of One ${inventory[0].name}: ${inventory[0].price}`);
console.log(product2);


//                           Assignment 4: Student List Organizer


// Learning Objective: Get comfortable with data structures (objects and arrays) and basic
// functions in TypeScript.
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)?

type students= {
    name:string,
    isSeniorStudent:boolean,
    hasCompletedAssignment:boolean
}

let student : students[] = [
    {name:"sana",isSeniorStudent:true,hasCompletedAssignment:true,},
{name:"uzma",isSeniorStudent:false,hasCompletedAssignment:true,},
{name:"atiqa",isSeniorStudent:true,hasCompletedAssignment:false,},
{name:"javeria",isSeniorStudent:false,hasCompletedAssignment:true,},
{name:"aina",isSeniorStudent:true,hasCompletedAssignment:false,}
    ,
];



function findSeniorStudentwithdoneAssignment(students: students[]): students[] {
    return students.filter(student => student.isSeniorStudent && student.hasCompletedAssignment)
};
console.log("This is a list of Students")
console.log(student);
console.log("This is a list of those students who has done Assignment")
const SeniorStudentwithAssignment = findSeniorStudentwithdoneAssignment(student);
console.log(SeniorStudentwithAssignment);





function removedstudentnotdoneAssignment(studet: students[]): students[] {
    return student.filter(student => student.isSeniorStudent && !student.hasCompletedAssignment)
};
const updatedStudentsList = removedstudentnotdoneAssignment(student);
console.log(updatedStudentsList);




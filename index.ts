#! /usr/bin/env Node

import inquirer from "inquirer";

const result = await inquirer.prompt([
    {message:"Enter your first number", type:"number", name:"firstnumber"},
    {message:"select an operator to perform", name:"operator", type:"list", choices:["+", "-", "*", "/", "**"]},
    {message:"enter your second number", type:"number", name:"secondnumber"}
])
//Conditional Statement

if (result.operator === "+"){
    console.log("The the result of addition is =", result.firstnumber + result.secondnumber);
}
else if (result.operator === "-"){
    console.log("The the result of substraction is =", result.firstnumber - result.secondnumber);
}
else if(result.operator === "*"){
    console.log("The the result of multiplication is =", result.firstnumber * result.secondnumber);
}
else if(result.operator === "/"){
    console.log("The the result of division is =", result.firstnumber / result.secondnumber);
}
else if (result.operator === "**"){
    console.log("The the result of exponention is =",result.firstnumber ** result.secondnumber);    
}
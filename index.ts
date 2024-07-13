#! /usr/bin/env node
//Making School Timetable using switch case
import inquirer from "inquirer";

let day = await inquirer.prompt([
    {
      name : "days",
      type : "list",
      message : "Choose a Day",
      choices : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]  
    }
])

switch(day.days){
    case "Monday" : 
    console.log("Study Maths Today")
    break;
    case "Tuesday" :
        console.log("Study Science Today")
        break;
    case "Wednesday" :
        console.log("Study History Today")
        break ;
    case "Thursday" :
        console.log("Study English Today")
        break ;
    case "Friday" :
        console.log("Study Geography Today")
        break ;
        case "Saturday" :
            console.log("Study Physics Today")
            break;
    default:
        console.log("Play Games")
        break;
        

}

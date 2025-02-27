// This javascript file contains the functions to be called in test.js
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
import { appendFileSync } from 'node:fs';

// Generate a unique ID from valid firstName and lastName
const generateUniqueID = (firstName, lastName) => {
    return firstName[0].toLowerCase() + lastName.toLowerCase() + uuidv4().slice(0,8);
}

// Adds an account that passed the validation to the user.txt
const addAccount = ([firstName, lastName, email, age]) => {
    // Input parameter validation
    if([firstName, lastName, email, age].length != 4) return false;
    if ((firstName === '')
    || (lastName === '')
    || (email === '')
    || (!validator.isEmail(email))
    || (age < 18)) return false;
    
    // Process the data string to write
    let userData = `${firstName},${lastName},${email},${generateUniqueID(firstName,lastName)}\n`;

    // Try to save the data
    try{
        appendFileSync("./users.txt", userData);    // Save data in the users.txt
    } catch (err){
        console.log(err);
        return false
    }
    return true;
}

// export the functions for other scripts to use
export default { addAccount }
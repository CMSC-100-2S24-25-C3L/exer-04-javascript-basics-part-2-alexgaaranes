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
    if ((firstName === '') || (lastName === '') ||
        (email === '') || (!validator.isEmail(email)) || 
        (age < 18)) return false;
    
    // Process the data string to write
    let userData = `${firstName},${lastName},${email},${generateUniqueID(firstName,lastName)}`;
    console.log(userData);

    try{
        appendFileSync("./users.txt", userData);
    } catch (err){
        console.log(err);
    } finally{
        return true;
    }
}

export default { addAccount }
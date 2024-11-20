// this file is used to access and modify the user.json
import userData from '../users.json';

const users = new File('../users.json');

//const fs = require('fs'); // File system module for file manipulation

/**
 * Load users from the JSON file.
 */
function loadUsers() {
    if (!fs.existsSync(userData)) {
        // If the file doesn't exist, return an empty array
        console.log("File: " + userData + " does not exist"); //log DNE for file
        return []; // return empty array
    }
    
    const data = fs.readFileSync(userData, 'utf8');
    return JSON.parse(data);
}

/**
 * Save users to the JSON file.
 */
function saveUsers(users) {
    const data = JSON.stringify(users, null, 2); // Convert array to a pretty-printed JSON string
    fs.writeFileSync(userData, data, 'utf8');
}

/**
 * Add a new user to the users JSON file.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 */
export function addUser(username, password) {
    const users = loadUsers();
    
    // Check if the user already exists
    if (users.some(user => user.username === username)) {
        throw new Error('Username already exists');
    }

    // Add new user
    const newUser = { username, password };
    users.push(newUser);

    saveUsers(users); // Save updated users list to the file
}

/**
 * Remove a user from the users JSON file.
 * @param {string} username - The username of the user to be removed.
 */
export function removeUser(username) {
    let users = loadUsers();

    // Filter out the user by username
    users = users.filter(user => user.username !== username);

    saveUsers(users); // Save updated users list to the file
}

/**
 * Search for a user by username.
 * @param {string} username - The username to search for.
 * @ returns {Object|null} - Returns user object if found, else null.
 * @returns {Boolean} - true if user is found.
 */
export function searchUser(username) {
    const users = loadUsers();
    return users.some(user => user.username === username);
    //return users.find(user => user.username === username) || null;
}

// module.exports = {
//     addUser,
//     removeUser,
//     searchUser
// };
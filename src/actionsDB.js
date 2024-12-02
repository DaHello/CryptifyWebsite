import { getCurrentDateTime } from "./getDateAndTime.js";

// use this file to get specific info from the database, this is a mock server that we use to access the
// db.json file (mock database), this imitates real practices for securely acessing a database

// user info from client side is passed here when logging in:
export async function handleLogin(formData) {
  const username = formData.get("username");
  const password = formData.get("password");

  // Here you would typically validate the credentials and perform the login logic
  // For this example, we'll just simulate a successful login
  console.log(`Login attempt for user: ${username}`);

  // Simulating an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: `Welcome back, ${username}!` };
}

export async function handleRegister(formData) {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  // Here you would typically handle the registration logic
  // For this example, we'll just simulate a successful registration
  console.log(`Registration attempt for user: ${username}, email: ${email}`);

  // Simulating an asynchronous operation
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true, message: `Account created for ${username}!` };
}

// log objects from client side are passed via these server calls
export async function fetchLogsById(id) {
  // fetch logs for a user based on username
  try {
    const response = await fetch(
      `http://localhost:8000/users?id=${id}`
    );
    const users = await response.json();
    if (users.length > 0) {
      return users[id - 1].logs; // use user id minus one for the index of the array of users objects
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching logs:", error);
    return [];
  }
}
// Usage
//fetchLogsById("user1").then((logs) => console.log(logs));

export async function fetchTodaysLogsById(id) {
  // get today's date:
  const {date, time} = getCurrentDateTime(); // use only date
  
  // fetch logs for a user based on username
  try {
    const response = await fetch(`http://localhost:8000/users?id=${id}`);
    const users = await response.json();
    
    const user = users[id - 1];
    if (users.length > 0) { // if found
    const todayLogs = user.logs.filter(log => log.date === date); // Filter logs for today's date
    console.log(`Successfully Fetched todays logs: ${date} at ${time}`);
    return todayLogs;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching logs:", error);
    return [];
  }
}

async function addLogById(id, action) { // pass the action and user id
  const { date, time } = getCurrentDateTime();
  console.log(`Log added for user with id: ${id}.`);
  console.log(`Date: ${date}`); // e.g., "Date: 12/01/2024"
  console.log(`Time: ${time}`); // e.g., "Time: 02:05:23 PM"

  const newLog = { // format new log to be added to db
    uid:"id", // may need to be a string (the id)
    dateNTime:`${date} at ${time}`,
    action:`${action}`
  };

  // add to the logs array for a user by their id
  try {
    // Step 1: Fetch the user
    const userResponse = await fetch(`http://localhost:8000/users?id=${id}`);
    const users = await userResponse.json();
    if (users.length === 0) {
      throw new Error("User id not found");
    }
    const user = users[id - 1]; // user's index in array is their id minus one

    // Step 2: Update logs
    const updatedLogs = [...user.logs, newLog]; // add new log to existing log array

    // Step 3: Update the user's logs on the server
    const updateResponse = await fetch(`http://localhost:8000/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ logs: updatedLogs }), // target the logs array inside json file with PATCH method
    });

    if (!updateResponse.ok) {
      throw new Error("Failed to update logs");
    }

    console.log("Log added successfully");
  } catch (error) {
    console.error("Error adding log:", error);
  }
}

// Usage example
// addLogById("1", {
//   uid: "1",
//   dateNTime: "12/01/2024 at ",
//   action: "user1 decrypted a file",
// });


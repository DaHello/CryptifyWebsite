import { getCurrentDateTime } from "./getDateAndTime.js";

// use this file to get specific info from the database, this is a mock server that we use to access the
// db.json file (mock database), this imitates real practices for securely acessing a database

// const fetchData = async () => {
//   // fetch users from json server at address, this also fetches the logs
//   const response = await fetch("http://localhost:8000/users"); // Replace with actual API call in a real app
//   const data = await response.json(); // data is an array of objects, gotten from the json file
//   return data;
// }

// log objects from client side are passed via these server calls
export async function fetchLogsByUser(currentUser) {
  // fetch logs for a user based on username
  try {
    const response = await fetch(
      `http://localhost:8000/users?id=${String(currentUser.id)}` // returns an array of one user object
    );
    const user = await response.json();

    //console.log(currentUser.id); // test
    if (!currentUser.id) {
      throw new Error("ID is required");
    }

    if (user[currentUser.id]) {
      console.log(user[0].logs);
      return user[0].logs;
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching logs:", error);
    return []; // empty array
  }
}

export async function fetchTodaysLogsByUser(currentUser) {
  // get today's date:
  const { date, time } = getCurrentDateTime();

  try {
    const response = await fetch(
      `http://localhost:8000/users?id=${String(currentUser.id)}`
    ); // fetches an array if the object
    const user = await response.json();
    // console.log(user[id - 1]); // test
    console.log(user);

    if (user[0]) {
      // if found
      const todayLogs = user[0].logs.filter((log) => log.date === date); // Filter logs for today's date
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

export async function addLogByUser(currentUser, action) {
  // pass the action and user id pass tge method through dunction call for tyoe of fetch action
  const { date, time } = getCurrentDateTime();
  const newLog = {
    // format new log to be added to db
    uid: String(currentUser.id),
    username: currentUser.username,
    date: date,
    time: time,
    action: action,
  };

  // add to the logs array for a user by searching by their id
  try {
    // Step 1: Fetch the user
    const userResponse = await fetch(
      `http://localhost:8000/users?id=${String(currentUser.id)}`
    ); // fetch the array of one object
    const user = await userResponse.json(); // this returns an array of one fetched object
    
    // console.log("___________________________"); // test
    // console.log(user);
    
    if (user[0]) {
      // if user was found
      console.log(`Successfully Fetched todays logs: ${date} at ${time}`);
      // update the log based on the action done
      const updatedLogs = [...user[0].logs, newLog]; // add new log to existing log array

      // PATCH fetch request
      const updateResponse = await fetch(
        `http://localhost:8000/users/${String(currentUser.id)}`, // retrieve the user object based on the id
        {
          method: "PATCH", // this is the method to pass as a parameter through the function for the type of fetch, would make more sense
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ logs: updatedLogs }), // target the logs array inside json file with PATCH method to update 
        }
      );

      console.log(updateResponse);
      if (!updateResponse.ok) {
        throw new Error("Failed to update logs");
      }

      console.log(`Log added for user with id: ${currentUser.id}.`);
      console.log(`Date: ${date}`); // e.g., "Date: 12/01/2024"
      console.log(`Time: ${time}`); // e.g., "Time: 02:05:23 PM"
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error adding log:", error);
  }
}

//addLogById(1, "user1 encrypted text"); // testing Add: "type":"method" inside package.json to test
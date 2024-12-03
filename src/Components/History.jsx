import React, { useState, useEffect } from "react";
import "../styles/History.css";
// import EventEmitter from "./mainpagecomponents/EventEmitter";

export const History = () =>{
    let now = new Date();
    const formatted = now.toLocaleString();  // Outputs date and time in the local format
  // Sample data
  const [activities, setActivities] = useState([
    { date: formatted, key: "Logged in", EncData: "Successful login" },
    { date: formatted, key: "Uploaded file", EncData: "Uploaded 'report.pdf'" },
    { date: formatted, key: "Changed password", EncData: "Password updated" },
  ]);
  function updateActivities(date, key, encryptedText){
    // const now = new Date();
    // const formatted = now.toLocaleString();  // Outputs date and time in the local format
    //console.log(formatted);
        const newActivity = { date: date, key: key, EncData: encryptedText};
        setActivities((prevActivities) => [...prevActivities, newActivity]);
  }
//   useEffect(() => {
//     // Define the event listener
//     const handleHistoryLog = (data) => {
//       const { date, key, EncData } = data;
//       updateActivities(date, key, EncData);
//     };
  
//     EventEmitter.on("HistoryLog", handleHistoryLog);
  
//     return () => {
//       // Clean up the listener when History unmounts
//       EventEmitter.off("HistoryLog", handleHistoryLog);
//     };
//   }, []);
//Camillo or Robert(Leader):-  use this function to update the history
return (
  <table>
  <thead>
    <tr>
      <th>Date</th>
      <th>Keys</th>
      <th>Encrypted Data</th>
    </tr>
  </thead>
  <tbody>
    {activities.map((activity, index) => (
      <tr key={index}>
        <td>{activity.date}</td>
        <td>{activity.key}</td>
        <td title={activity.EncData}>
          {activity.EncData.length > 50
            ? activity.EncData.substring(0, 50) + "..."
            : activity.EncData}
        </td>
      </tr>
    ))}
  </tbody>
</table>
);
};

export default History;
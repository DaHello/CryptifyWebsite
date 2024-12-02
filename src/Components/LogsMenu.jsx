import { fetchLogsById, fetchTodaysLogsById } from "../actionsDB";
import { addLogById } from "../actionsDB";

import "../styles/LogsMenu.css";

export function LogsMenu({ currentUsername, uid, closeOptions }) {
  // pass username and uid from Outlet in RootLayout.jsx
  if ({ currentUsername }) {
    // a user is logged in:
    // fetch ONLY the logs from the current user, search for the current user by id.
    // how to get current user id? Find the user's log by matching searching the array of objects
    function downloadUserLogsToday() {
      // menu option
      const logsToday = fetchTodaysLogsById(uid);

      // download the logs by text
    }

    function downloadAllUserLogs() {
      const logsAll = fetchLogsById(uid);

      //download the logs by text file
    }

    // this needs to be improved, looks terrible
    return (
      <div className="LogsMenu">
        <h1>{currentUsername}'s Logs:</h1>
        <button onClick={downloadUserLogsToday}>Today's Logs</button>
        <button onClick={downloadAllUserLogs}>All Logs</button>
        <button onClick={closeOptions}>Close</button>
      </div>
    );
  } else {
    // not signed in (guest mode): MAY NOT SUPPORT THIS

    // function getLogsGuest() {
    //     return fetch
    // }

    return (
      <div className="LogsMenu">
        <p>NOTHING SUPPOSED TO HAPPEN</p>
      </div>
    );
  }

  // menu:
  //    if no user message: login to save your logs permanently!! (save Guest Logs to the local storage)
  //    else {
  //          download today's logs (get logs by date and user-id (uid)   )
  //          donwload all logs (download all logs for uid)
}

import { fetchLogsForUser } from "../actionsDB";
import { addLogForUser } from "../actionsDB";

// this is a fake log page, so that I can start working on getting the logs finished
export function FakeLogPage() {}

export function LogsMenu({ username, uid }) {
    

  if ({ username }) { // signed in:
    // fetch ONLY the logs from the current user, search for the current user by id.
    // how to get current user id? Find the user's log by matching searching the array of objects

    fetchLogsForUser()

    return (
      <div className="getLogsButton"></div>
    );
  } else { // not signed in:
    return (
      <div className="getLogsButton"></div>
    );
  }

  // menu:
  //        message: login to save your logs permanently!! (save Guest Logs to the local storage)
  //    download today's logs (get logs by date and user-id (uid)   )
  //    donwload all logs (download all logs for uid)
}

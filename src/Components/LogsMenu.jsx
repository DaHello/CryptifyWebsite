import { fetchLogsById, fetchTodaysLogsById } from "../actionsDB";
import { useUser } from "./currentUserContext";
import { getCurrentDateTime } from "../getDateAndTime";

import "../styles/LogsMenu.css";

export function LogsMenu({ closeOptions, data }) {
  const { currentUser } = useUser();

  // Helper function to create and download a text file
  function downloadTextFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // if current user is logged in:
  if (currentUser.username) {

    // Fetch and download today's logs
    async function downloadUserLogsToday() {
      const { date, time } = getCurrentDateTime();
      try {
        console.log(currentUser);
        const logsToday = await fetchTodaysLogsById(currentUser.id);
        const logsText = JSON.stringify(logsToday, null, 2); // Convert to JSON string
        downloadTextFile(
          `todays_logs_${currentUser.username}-${date}-${time}.txt`, logsText);
      } catch (error) {
        console.error("Failed to download today's logs:", error);
      }
    }

    // download all user logs
    async function downloadAllUserLogs() {
      const { date, time } = getCurrentDateTime();
      try {
        console.log(currentUser);
        const logsAll = await fetchLogsById(currentUser.id);
        const logsText = JSON.stringify(logsAll, null, 2); // Convert to JSON string
        downloadTextFile(`all_logs_${currentUser.username}-${date}-${time}.txt`, logsText);
      } catch (error) {
        console.error("Failed to download all logs:", error);
      }
    }

    return (
      <div className="LogsMenu">
        <h1>{currentUser.username}'s Logs:</h1>
        <button onClick={downloadUserLogsToday}>Today's Logs</button>
        <button onClick={downloadAllUserLogs}>All Logs</button>
        <button onClick={closeOptions}>Close</button>
      </div>
    );
  } else {
    console.log("need to be logged in to download user logs.");
  }
}

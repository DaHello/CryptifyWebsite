// used to get the current date and time, check bottom for how to use
const getCurrentDateTime12Hour = () => {
    const now = new Date();
  
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const year = now.getFullYear();
  
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12 || 12; // Convert to 12-hour format
  
    const formattedDate = `${month}/${day}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;
  
    return { date: formattedDate, time: formattedTime };
  };
  // Usage
  const { date, time } = getCurrentDateTime12Hour();
  console.log(`Date: ${date}`); // e.g., "Date: 12/01/2024"
  console.log(`Time: ${time}`); // e.g., "Time: 02:05:23 PM"
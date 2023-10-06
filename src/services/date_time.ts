
export function formatToISOString(timestamp) {
    let date;
  
    if (typeof timestamp === 'string') {
        if (/^\d+$/.test(timestamp)) {
            // Check if the string contains only digits (e.g., "1673012096000")
            if (timestamp.length === 13) {
                date = new Date(Number(timestamp));
            } else if (timestamp.length === 10) {
                date = new Date(Number(timestamp) * 1000);
            }
        } else {
            // Attempt to parse the string as a date
            date = new Date(timestamp);
        }
    } else if (typeof timestamp === 'number') {
        if (timestamp.toString().length === 13) {
            date = new Date(Number(timestamp));
        } else if (timestamp.toString().length === 10) {
            date = new Date(Number(timestamp) * 1000);
        }
    }
  
    // Check if the date is valid
    if (isNaN(date.getTime())) {
        console.log('Invalid timestamp');
        return null
    }
  
    return date.toISOString();
  }
  
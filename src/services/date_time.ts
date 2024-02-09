
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
    if (date && !isNaN(date.getTime())) {
        return date.toISOString();
    } else {
        console.log('Invalid timestamp');
        return null;
    }
}

export function getCurrentDateTime() {
    return new Date().toISOString()
}

export function currentTimePlusMinutes(minutesToAdd: number) {
    const currentTime = getCurrentDateTime();
    const currentTimeInMilliseconds = Date.parse(currentTime);

    const newTimeInMilliseconds = currentTimeInMilliseconds + minutesToAdd * 60000; // 60000 milliseconds in a minute
    return formatToISOString(newTimeInMilliseconds);
}

export function dateTimePlusMinutes(dateTime: any, minutesToAdd: number) {
    try {
        const currentTimeInMilliseconds = Date.parse(dateTime);
        const newTimeInMilliseconds = currentTimeInMilliseconds + minutesToAdd * 60000;
        return formatToISOString(newTimeInMilliseconds);
    } catch (error) {
        console.error('Error calculating date time plus minutes:', error.message);
        return null;
    }
}

export function isExpiryTimeActive(expiry_time) {
    const formatted_expiry_time = formatToISOString(expiry_time);
    const current_time = getCurrentDateTime()

    const isExpired = formatted_expiry_time < current_time;

    return !isExpired;
}
function checkSpeed(speed) {
    const speedLimit = 70;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log(`Points: ${demeritPoints}`);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Example usage:
checkSpeed(80);

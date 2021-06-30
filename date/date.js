
function convert (rawInput) {

    var inputDateObject = new Date(rawInput); 

    if (inputDateObject == 'Invalid Date') {
        // console.log('Not a valid date. Process as a timestamp.');

        var numberInput = Number(rawInput); 
        // console.log(numberInput, typeof numberInput);

        if (isNaN(numberInput)) {
            return {ts: `Timestamp: ${null}`, ds: `Date: ${null}`}; 
        } else {
            var milliseconds = Math.round(numberInput * 1000); 
            var dateString = new Date(milliseconds).toDateString(); 
            console.log(dateString, typeof dateString);
            return {
            ts: `Timestamp: ${rawInput}`, 
            ds: `Date: ${dateString}`
            }
        }
    } else {
        // console.log('Process as date object'); 
        
        var timestamp = new Date(rawInput).getTime() / 1000; 
        var dateString = new Date(rawInput).toDateString(); 
        // console.log(timestamp, dateString); 

        return {
            ts: `Timestamp: ${timestamp}`, 
            ds: `Date: ${dateString}`
        }
    }

} //convert

module.exports.convert = convert; 


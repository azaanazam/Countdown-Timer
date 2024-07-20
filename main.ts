#! /usr/bin/env node
import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

//function for count down second
function* countdownTimer(second: number) {
    //while loop
    while (second > 0) {
        yield second;
        second--;
    }
}


//step 2 : counter inilization

let timerIterator = countdownTimer(25);

//function to create a count down timer
function displayCountdown(){
    
    //value below 10
    let result = timerIterator.next();


    //if else condition apply


    if (!result.done) {
        //current date and time calls
        const now = new Date();
// calculate mintes in time
        const countdownTime = new Date(now.getTime() + (result.value * 1000))

        //calculate remaining second in time
        const remainingSeconds = differenceInSeconds(countdownTime , now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)

    setTimeout(displayCountdown, 1000) // 1 second is equal to 1000 ms
    }else{
    // display result count down complete
    console.log("Countdown complete!")
 }
}

//invoke
displayCountdown();

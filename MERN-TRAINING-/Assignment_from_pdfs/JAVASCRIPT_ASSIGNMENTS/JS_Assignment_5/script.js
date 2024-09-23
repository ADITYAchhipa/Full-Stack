// Q1. Write a function called `delayedMessage` that takes a message and a delay (in milliseconds) as arguments. Use `setTimeout` to log the message to the console after the specified delay.

// function delayedMessage(message, delay) {
//     setTimeout(() => {
//         console.log(message);
//     }, delay);
// }
// delayedMessage("Hello, world!", 2000);

// Q2. Create a function called `countdown` that takes a number as an argument. Use `setInterval` to log the countdown from that number to zero, decrementing by 1 every second. Stop the interval when it reaches zero

// function countdown(number) {
//     const intervalId = setInterval(() => {
//         console.log(number);
//         number--;

//         if (number < 0) {
//             clearInterval(intervalId);
//             console.log("Countdown complete!");
//         }
//     }, 1000);
// }
// countdown(5);

// Q3. Extend the `countdown` function from the previous question to also accept a callback function that gets executed when the countdown reaches zero. Ensure the interval is cleared after the countdown completes.

// function countdown(number, callback) {
//     const intervalId = setInterval(() => {
//         console.log(number);
//         number--;

//         if (number < 0) {
//             clearInterval(intervalId);
//             console.log("Countdown complete!");
//             callback();
//         }
//     }, 1000);
// }
// countdown(5, () => {
//     console.log("Callback executed: Countdown has finished!");
// });

// Q4. Write a function called `wait` that returns a Promise. The Promise should resolve after a delay (in milliseconds) that is passed as an argument to the function. Test this function by logging a message to the console once the promise resolves.

// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, delay);
//     });
// }
// wait(2000).then(() => {
//     console.log("Promise resolved after 2 seconds");
// });

// Q5.  Refactor the `countdown` function to return a Promise that resolves when the countdown completes. Use the `wait` function from the previous question to handle the delay between countdown steps

// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }
// function countdown(number) {
//     return new Promise(async (resolve) => {
//         while (number >= 0) {
//             console.log(number);
//             await wait(1000);
//             number--;
//         }
//         console.log("Countdown complete!");
//         resolve();
//     });
// }
// countdown(5).then(() => {
//     console.log("Promise resolved: Countdown has finished!");
// });

// Q6. Create a function `delayedLogSequence` that takes an array of messages and delays (in milliseconds). The function should use Promises to log each message to the console in sequence, waiting for the specified delay between each log.

// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }
// async function delayedLogSequence(messages, delays) {
//     for (let i = 0; i < messages.length; i++) {
//         console.log(messages[i]);
//         await wait(delays[i]);
//     }
//     console.log("All messages logged!");
// }
// const messages = ["Message 1", "Message 2", "Message 3"];
// const delays = [3000, 5000, 7000];

// delayedLogSequence(messages, delays).then(() => {
//     console.log("Sequence complete!");
// });

// Q7. Rewrite the `delayedLogSequence` function using `async/await` instead of chaining `.then()` methods. Ensure the function logs each message with the specified delay.


// function wait(delay) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, delay);
//     });
// }
// async function delayedLogSequence(messages, delays) {
//     for (let i = 0; i < messages.length; i++) {
//         console.log(messages[i]);
//         await wait(delays[i]);
//     }
//     console.log("All messages logged!");
// }
// const messages = ["Message 1", "Message 2", "Message 3"];
// const delays = [3000, 5000, 7000];

// delayedLogSequence(messages, delays).then(() => {
//     console.log("Sequence complete!");
// });

// Q8. Create a function called `randomDelayMessage` that logs a message to the console after a random delay between 1 and 5 seconds. Use `setTimeout` and a Promise to implement this

// function randomDelayMessage(message) {
//     const delay = Math.floor(Math.random() * 5000) + 1000;
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log(message);
//             console.log(delay);            
//             resolve();
//         }, delay);
//     });
// }
// randomDelayMessage("This message is delayed randomly!").then(() => {
//     console.log("Message logged after random delay.");
// });

// Q9. Write a function called `repeatAction` that takes an action (a function), an interval (in milliseconds), and a duration (in milliseconds). Use `setInterval` to repeatedly execute the action at the specified interval, but stop after the specified duration. Return a Promise that resolves when the repeating action stops

function repeatAction(action, interval, duration) {
    return new Promise((resolve) => {
        const intervalId = setInterval(action, interval);
        setTimeout(() => {
            clearInterval(intervalId);
            resolve();
        }, duration);
    });
}
repeatAction(() => {
    console.log("Action executed");
}, 2000, 10000).then(() => {
    console.log("Repeating action stopped");
});

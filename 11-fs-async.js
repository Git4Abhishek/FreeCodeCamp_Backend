// Example of Asynchronous JS (Non-Blocking JS)

const { readFile, writeFile } = require('fs')

console.log("this task start");

readFile('./content/first.txt', 'utf8', (error, result) => {
    if(error) {
        console.log(error);
        return;
    } 
    const first = result;
    console.log(`First Result: ${first}`);
    readFile('./content/second.txt', 'utf8', (error, result) => {
        if(error) {
            console.log(error);
            return;
        }
        const second = result;
        console.log(`Second Result: ${second}`);
        writeFile(
            './content/result-async.txt',
            `Async Result: ${first}, ${second}`,
            { flag: 'a' },
            (error, result) => {
                if(error, result) {
                    console.log(error);
                    return;
                }
                // console.log(`Write Result: ${result}`);
                console.log("this task done");
        })
    })
})

console.log("starting another task..");





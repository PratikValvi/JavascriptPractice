
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 5000);
})

promise.then(() => {
    console.log("Delay of 5s")
})

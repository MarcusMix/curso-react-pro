

const myPromise = new Promise((resolve, reject) => {
    if(1 + 1 === 2) {
        resolve("Sucesso");
    }
})

myPromise.then((value) => {
    console.log(value)
}).catch((value) => console.log(value))
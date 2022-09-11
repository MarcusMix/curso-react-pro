const object = {
    message: "Hello World!",
    printMessage: () => {
        console.log(this);
    }
}


const object1 = {
    message: "Hello World!",
    printMessage() {
        console.log(this);
    }
}

object.printMessage()
// object1.printMessage()
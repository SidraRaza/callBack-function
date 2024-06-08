// callBack Function 1
function callback(Callback: (name: string) => void) {
    Callback('World');
}
let call = (name: string) => {
    console.log(`Hello ${name}`);
}
callback(call);

// CallBack Function 2
function greet(name: string, callback: (greeting: string) => void): void {

    const greetingMessage = `Hello, ${name}!`;
    callback(greetingMessage);
}


greet("Sidra", (greeting) => {
    console.log(greeting);
});

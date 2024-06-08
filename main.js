// callBack Function 1
function callback(Callback) {
    Callback('World');
}
let call = (name) => {
    console.log(`Hello ${name}`);
};
callback(call);
// CallBack Function 2
function greet(name, callback) {
    const greetingMessage = `Hello, ${name}!`;
    callback(greetingMessage);
}
greet("Sidra", (greeting) => {
    console.log(greeting);
});
export {};

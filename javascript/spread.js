// const arr=["one","two","three","four","five"]
// const newArr=["six","seven",...arr];
// console.log(newArr);


//Synchronous Example
// const sayHi = () => {
//     console.log("It is sayHi function")
// }

// const sayHello = () => {
//     console.log("begining of the sayHello")
//     sayHi();
//     console.log("End of the say Hello function");
// }

// sayHello();


//Asynchronous Example
const sayHi=()=> {
    console.log("It is sayHi function")
}
const sayHello=()=> {
    console.log("begining of the sayHello")
    setTimeout(()=>{
        sayHi();
    }, 3000)

    console.log("End of the say Hello function");
}

sayHello();//function calling
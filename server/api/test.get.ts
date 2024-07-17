// import myFunction from "../utils/my-function"
// import testing from "../test/testing"

export default defineEventHandler((event)=>{
  console.log(event.context.authorized)  
  // return 'Hello World with GET method'
  // return myFunction()
  // return testing()
  return `Hello World with GET method / ${myFunction()} / ${testing()}`
})
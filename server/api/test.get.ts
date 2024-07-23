// import myFunction from "../utils/my-function"
// import testing from "../test/testing"

export default defineEventHandler((event)=>{
  try {
    console.log(event.context.authorized)  
    // return 'Hello World with GET method'
    // return myFunction()
    // return testing()  
    setResponseHeader(event, 'Authorization', 12)
    setCookie(event, 'cookie-name', 'cookie-value', {
      httpOnly: true,
      expires: new Date( new Date().setDate(new Date().getDate() + 30))
    })
    
    // return parseCookies(event)
    // deleteCookie(event, 'cookie-name')
    return `Hello World with GET method / ${myFunction()} / ${testing()} / ${getCookie(event, 'cookie-name')}` 
  
  } catch (error) {
    return createError({statusCode: 500, statusMessage: 'Error in your API.'})
  }
})
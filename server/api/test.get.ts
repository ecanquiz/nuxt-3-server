export default defineEventHandler((event)=>{
  console.log(event.context.authorized)  
  return 'Hello World with GET method'
})
export default defineEventHandler((event)=>{
  console.log(event.context.autorized)  
  return 'Hello World with GET method'
})
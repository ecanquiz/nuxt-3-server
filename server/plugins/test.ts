//import mongoose from 'mongoose'

export default defineNitroPlugin((nitroApp)=>{
  // console.log('Nitro', nitroApp)
  nitroApp.hooks.hook('render:html', (html, {event})=>{
    // console.log('HTML Rendered.')
    html.bodyAppend.push('<h1>I am from nitro.</h1>')
  })

  nitroApp.hooks.hook('render:response', (response, {event})=>{
    console.log(event.node.req.headers['user-agent'])
  })

  //mongoose.connect(useRuntimeConfig().MONGO_URI)
  //console.log('Connected to mongoDB.')
})
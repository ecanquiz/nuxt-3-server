export default defineNitroPlugin((nitroApp)=>{
  // console.log('Nitro', nitroApp)
  nitroApp.hooks.hook('render:html', (html, {event})=>{
    // console.log('HTML Rendered.')
    html.bodyAppend.push('<h1>I am from nitro.</h1>')
  })

  nitroApp.hooks.hook('render:response', (response, {event})=>{
    console.log(event.node.req.headers['user-agent'])
  })
})
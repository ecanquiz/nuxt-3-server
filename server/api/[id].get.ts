export default defineEventHandler((event) => {
  // const params = getRouterParams(event)
  // return params

  // const id = event.context.params!.id
  // return id

  const id = getRouterParam(event, 'id')
  return id
})
interface IBody {
    firtName: string
    lastName: string
    email: string
    password : string
}

export default defineEventHandler<{body: IBody, query: {id: string}}>(async (event) => {
  // return 200

  //const body = await readBody(event)
  //return body

  /*const { // firtName, lastName,
    email, // password
  } = await readBody(event)
  return email*/

  /*const result:string[] = []
  const files = await readMultipartFormData(event)
  files?.forEach((file)=> {
    result.push(file.filename!)
  })
  return result*/

  const query = getQuery(event)
  return query.id
})

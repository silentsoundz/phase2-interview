const clients = require('./clients.json')
const searchArg = process.argv[2]

const searchByCity = (query) => {
  let queryLowerCase = query.toLowerCase()
  const searchResults = []

  clients.forEach((client) => {
    let city = client.city.toLowerCase()
    if(city.includes(queryLowerCase)) {
      const newContact = {}
      newContact.id = client.id
      newContact.rep_name = client.rep_name
      newContact.company = client.company
      newContact.city = client.city
      newContact.state = client.state
      searchResults.push(newContact)
      searchResults.sort((a, b) =>
      a.city.localeCompare(b.city))
    }
  })
  return searchResults
}

searchByCity(searchArg)


console.log(searchByCity(searchArg));

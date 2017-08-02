const clients = require('./clients.json')
const searchArg = process.argv[2]

const searchByCompany = (query) => {
  let queryLowerCase = query.toLowerCase()
  const searchResults = []

  clients.forEach((client) => {
    let company = client.company.toLowerCase()
    if(company.startsWith(queryLowerCase)) {
      const newContact = {}
      newContact.id = client.id
      newContact.company = client.company
      newContact.phone = client.phone
      searchResults.push(newContact)
      searchResults.sort((a, b) =>
    a.company.localeCompare(b.company))
    }
  })
  return searchResults
}

searchByCompany(searchArg)

console.log(searchByCompany(searchArg));
const customerContainer = document.querySelector('#container') 
console.log(customerContainer)

let customerDb = customers[0]


for (let customerProfile of customers) {
    let people = document.querySelector('#people') // variable people is selecting the ul class of people   
    let customerName = document.createElement('h1') // variable customerName is creating the tag li
    // and giving it this name
    customerName.innerText = `${customerProfile.name.first} ${customerProfile.name.last}` 
    people.appendChild(customerName)

    const customerImg = document.createElement('img')
    customerImg.src = customerProfile.picture.thumbnail
    customerContainer.appendChild(customerImg)

    const customerEmail = document.createElement('h2')
    customerEmail.innerText = customerProfile.email
    customerContainer.appendChild(customerEmail)

    const customerPhone = document.createElement('h3')
    customerPhone.innerText = customerProfile.phone
    customerContainer.appendChild(customerPhone)

    const customerAddress = document.createElement('h4')
    customerAddress.innerText = `${customerProfile.location.street.number} 
    ${customerProfile.location.street.name} ${customerProfile.location.city}, 
    ${nameToAbbr(customerProfile.location.state)} 
    ${customerProfile.location.postcode}`
    customerContainer.appendChild(customerAddress)

    const customerDob = document.createElement('h5')
    customerDob.innerText = customerProfile.dob.date
    customerContainer.appendChild(customerDob)

    const customerStartDate = document.createElement('h6')
    customerStartDate.innerText = customerProfile.registered.date
    customerContainer.appendChild(customerStartDate)

}
// let firstNames = document.querySelector('#people')

// let names = document.createElement('li')
// names.innerText = 'testing'
// console.log(names)
// firstNames.appendChild(names)

// for (let item of menuItems){
//     console.log(item.title)
//     // create a DOM element for menu title
//     const menuHeader = document.createElement("li")
//     menuHeader.innerText = item.title
//     // insert it into the DOM
//     container.appendChild(menuHeader)
//     // create a DOM element for menu image
//     const menuImg = document.createElement("img")
//     // set src attribute
//     menuImg.src = item.imgUrl
//     // insert it into the DOM
//     container.appendChild(menuImg)
// }

// const customerName = document.createElement('h3')
// customerName.innerText = `${customer.name.first} ${customer.name.last}` 
// container.appendChild(customerName)



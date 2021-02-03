const customerContainer = document.querySelector('#container') 
console.log(customerContainer)

let customerDb = customers[0]

// Dawud's for loop to call the next function
// for (let index = 0; index < customers.length; index++) {
//     makeAndFillDiv[index]   
//}

// he then makes the function here
// function makeAndFillDiv[index] {
//     let newDiv = document.createElement('div')
//     newDiv.className = 'profile'
//
//     let customerImg = document.createElement('img')
//     customerImg.src = customers[index].picture.large
// } there is much more to it but this is an example of his broader structure
// he appends this information at the end as newDiv.appendChild(customerImg)
// what this function is doing in conjunction with the for loop is creating a "newDiv" that puts all
// the appropriate information from the object, then after it finishes filling that index, moves to
// the next index to begin filling that with the right information from the object

for (let customerProfile of customers) {
    let people = document.querySelector('#people') // variable people is selecting the ul class of people
    let imageBox = document.querySelector('.images')
    
    
    const customerImg = document.createElement('img')
    customerImg.src = customerProfile.picture.thumbnail
    imageBox.appendChild(customerImg)
    
    const customerName = document.createElement('h1') // variable customerName is creating the tag li
    // and giving it this name
    customerName.innerText = `${customerProfile.name.first} ${customerProfile.name.last}` 
    customerContainer.appendChild(customerName)

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

// this function is called within the makeAndFillDiv to make the names have proper capitalization
// function titleCaseName(name){  // titleCaseName = function name to call later
//     let allNames = name.toLowerCase().split(" ") 
// making variable to apply arguments too
// the "toLowerCase" makes the characters in the string lower case while "split" makes a string into an array
//     for (let index = 0; index < allNames.length; index++) { 
// making a For loop with the new array
//         allNames[index] = allNames[index][0].toUpperCase() + allNames[index].slice[1]
// grabing values from the array then applying uppercase and slice. So for the array when calling
// [0] we are calling the very first value and then calling uppercase to it then we are adding this new
// version to the array but without the original value. example, we start with a sting
// "john". then make it into an array, ["j","o","h","n"], then we say hey whenever I use this function
// apply these changes to the value inside. It pulls ["j"] out and makes it ["J"] then
// '+ allNames[index].slice[1]' means that we have an array that says ["J","o","h","n"]
//     }    
//     return allNames.join(" ")
// this tells us to return that array now as a string again
// }

// // writing out Dawud's strategy 

// // Dawud's for loop to call the next function
// for (let index = 0; index < customers.length; index++) {
//     makeAndFillDiv[index]   
// this is just a for loop that will allow us to iterate upon each index inside the function
// }

// function makeAndFillDiv(index) {
//     let newDiv = document.createElement('div') 
//   creating an HTML element and giving it a variable name to call later
//     newDiv.className = "profile"
//   giving that HTML tag a class name

//     let customerImg = document.createElement('img')
//     customerImg.src = customers[index].picture.large

//     let nameTitle = document.createElement('p')
//     nameTitle.className = 'name-title'
//     nameTitle.innerHTML = titleCaseName(customers[index].name.first + ' ' + customers[index].name.last)

//     let customerPhone = document.createElement('p')
//     customerPhone.className = 'customer-phone'
//     customerPhone.innerHTML = `${customers[index].cell}`

//     let customerEmail = document.createElement('p')
//     customerEmail.className = 'customer-email'
//     customerEmail.innerHTML = customers[index].email

//     let customerAddress = document.createElement('p')
//     customerAddress.innerHTML = `${customerProfile.location.street.number} 
//     ${customerProfile.location.street.name} ${customerProfile.location.city}, 
//     ${nameToAbbr(customerProfile.location.state)} 
//     ${customerProfile.location.postcode}`

//     let customerDob = document.createElement('p')
//     customerDob.className = 'customer-DOB'
//     customerDob.innerHTML = `DOB: ${moment(customerDob[index].dob.date).format('ll')}`

//     let customerStart = document.createElement('p')
//     customerStart.className = 'customer-start'
//     customerStart.innerHTML = `Customer since ${moment(customers[index].registered.date).format('ll')}`
    
//     newDiv.appendChild(customerImg)
//     newDiv.appendChild(nameTitle)
//     newDiv.appendChild(customerPhone)
//     newDiv.appendChild(customerEmail)
//     newDiv.appendChild(customerAddress)
//     newDiv.appendChild(customerDob)
//     newDiv.appendChild(customerStart)

//     customerContainer.appendChild(newDiv)

// }


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








// rewritten version of laura's strategy
// for (let customerProfile of customers) {
//     // let people = document.querySelector('#people') // variable people is selecting the ul class of people
//     // let imageBox = document.querySelector('.images')
//     const customerInfo = document.createElement('div')
//     customerInfo.classList.add('customer-information')
    
//     const customerImg = document.createElement('img')
//     customerImg.src = customerProfile.picture.thumbnail
//     customerInfo.appendChild(customerImg)
    
//     const customerName = document.createElement('h1') // variable customerName is creating the tag li
//     // and giving it this name
//     customerName.innerText = `${customerProfile.name.first} ${customerProfile.name.last}` 
//     customerInfo.appendChild(customerName)

//     const customerEmail = document.createElement('h2')
//     customerEmail.innerText = customerProfile.email
//     customerInfo.appendChild(customerEmail)

//     const customerPhone = document.createElement('h3')
//     customerPhone.innerText = customerProfile.phone
//     customerInfo.appendChild(customerPhone)

//     const customerAddress = document.createElement('h4')
//     customerAddress.innerText = `${customerProfile.location.street.number} 
//     ${customerProfile.location.street.name} ${customerProfile.location.city}, 
//     ${nameToAbbr(customerProfile.location.state)} 
//     ${customerProfile.location.postcode}`
//     customerInfo.appendChild(customerAddress)

//     const customerDob = document.createElement('h5')
//     customerDob.innerText = customerProfile.dob.date
//     customerInfo.appendChild(customerDob)

//     const customerStartDate = document.createElement('h6')
//     customerStartDate.innerText = customerProfile.registered.date
//     customerInfo.appendChild(customerStartDate)

// }
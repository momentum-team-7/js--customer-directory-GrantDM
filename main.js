const customerContainer = document.querySelector('#container') 
console.log(customerContainer)

let customerDb = customers[0]

// Dawud's for loop to call the next function
// for (let index = 0; index < customers.length; index++) {
//     makeAndFillDiv[index]   
//}

//? he then makes the function here
//? function makeAndFillDiv[index] {
//     let newDiv = document.createElement('div')
//     newDiv.className = 'profile'
//
//     let customerImg = document.createElement('img')
//     customerImg.src = customers[index].picture.large
// } 
//? there is much more to it but this is an example of his broader structure
//? he appends this information at the end as newDiv.appendChild(customerImg)
//? what this function is doing in conjunction with the for loop is creating a "newDiv" that puts all
//? the appropriate information from the object, then after it finishes filling that index, moves to
//? the next index to begin filling that with the right information from the object

for (let customerProfile of customers) {
    // let people = document.querySelector('#people') 
    // variable people is selecting the ul class of people
    // let imageBox = document.querySelector('.images')
    
    
    const customerImg = document.createElement('img')
//  creating a HTML tag and giving it a name
    customerImg.src = customerProfile.picture.thumbnail
//  giving that HTML tag an element to hold on to, in this case an image src
    customerContainer.appendChild(customerImg)
//  placing that HTML tag with the element into the container div
    
    const customerName = document.createElement('h1') 
//  creating a HTML tag and giving it a name
    customerName.innerText = `${customerProfile.name.first} ${customerProfile.name.last}`
//  giving that HTML an element, in this case a template literal, puts the first and last name values
//  into a string to present the information as we want it to be
    customerContainer.appendChild(customerName)
//  placing that HTML tag with the element into the container div

    const customerEmail = document.createElement('h2')
//  creating a HTML tag and giving it a name
    customerEmail.innerText = customerProfile.email
//  giving that HTML an element in the style of text
    customerContainer.appendChild(customerEmail)
//  placing that HTML tag with the element into the container div

    const customerPhone = document.createElement('h3')
//  creating a HTML tag and giving it a name
    customerPhone.innerText = customerProfile.phone
//  giving that HTML an element in the style of text
    customerContainer.appendChild(customerPhone)
//  placing that HTML tag with the element into the container div

    const customerAddress = document.createElement('h4')
//  creating a HTML tag and giving it a name
    customerAddress.innerText = `${customerProfile.location.street.number} 
    ${customerProfile.location.street.name} ${customerProfile.location.city}, 
    ${nameToAbbr(customerProfile.location.state)} 
    ${customerProfile.location.postcode}`
//  giving the HTML an element, in this case a template literal that will hold these variables
//  as a string in a precise way due to the notaion we have
    customerContainer.appendChild(customerAddress)
//  placing that HTML tag with the element into the container div

    const customerDob = document.createElement('h5')
//  creating a HTML tag and giving it a name
    customerDob.innerText = customerProfile.dob.date
//  giving that HTML an element in the style of text
    customerContainer.appendChild(customerDob)
//  placing that HTML tag with the element into the container div

    const customerStartDate = document.createElement('h6')
//  creating a HTML tag and giving it a name
    customerStartDate.innerText = customerProfile.registered.date
//  giving that HTML an element in the style of text
    customerContainer.appendChild(customerStartDate)
//  placing that HTML tag with the element into the container div

//  this setup as is will not provide proper capitalized names nor will it show the dates related
//  values in the format that we wish to have them in
}

//? this function is called within the makeAndFillDiv to make the names have proper capitalization
// function titleCaseName(name){  
//? titleCaseName = function name to call later
//     let allNames = name.toLowerCase().split(" ") 
//? making variable to apply arguments too
//? the "toLowerCase" makes the characters in the string lower case while "split" makes a string into an array
//     for (let index = 0; index < allNames.length; index++) { 
// making a For loop with the new array
//         allNames[index] = allNames[index][0].toUpperCase() + allNames[index].slice[1]
//? grabing values from the array then applying uppercase and slice. So for the array when calling
//? [0] we are calling the very first value and then calling uppercase to it then we are adding this new
//? version to the array but without the original value. example, we start with a sting
//? "john". then make it into an array, ["j","o","h","n"], then we say hey whenever I use this function
//? apply these changes to the value inside. It pulls ["j"] out and makes it ["J"] then
//? '+ allNames[index].slice[1]' means that we have an array that says ["J","o","h","n"]
//     }    
//     return allNames.join(" ")
//? this tells us to return that array now as a string again
// }

//? writing out Dawud's strategy 

//? Dawud's for loop to call the next function
// for (let index = 0; index < customers.length; index++) {
//     makeAndFillDiv[index]   
//? this is just a for loop that will allow us to iterate upon each index inside the function
// }

// function makeAndFillDiv(index) {
//     let newDiv = document.createElement('div') 
//?    creating an HTML tag and giving it a variable name to call later
//     newDiv.className = "profile"
//?    giving that HTML tag a class name

//     let customerImg = document.createElement('img')
//?    creating a HTML tag and giving it a name
//     customerImg.src = customers[index].picture.large
//?    giving that tag an element to hold

//     let nameTitle = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     nameTitle.className = 'name-title'
//?    giving that HTML tag a class name
//     nameTitle.innerHTML = titleCaseName(customers[index].name.first + ' ' + customers[index].name.last)
//?    placing an element inside the HTML tag, in this case we are also calling upon a function
//?    we defined earlier on that makes sure the names first and last name have proper capitalization

//     let customerPhone = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     customerPhone.className = 'customer-phone'
//?    giving that HTML tag a class name
//     customerPhone.innerHTML = `${customers[index].cell}`
//?    placing element in the HTML tag, we use template literal here to make it a string
//?    that also holds a variable that can change

//     let customerEmail = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     customerEmail.className = 'customer-email'
//?    giving that HTML tag a class name
//     customerEmail.innerHTML = customers[index].email
//?    placing element in the HTML tag, calling from our object array

//     let customerAddress = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     customerAddress.innerHTML = `${customerProfile.location.street.number} 
//     ${customerProfile.location.street.name} ${customerProfile.location.city}, 
//     ${nameToAbbr(customerProfile.location.state)} 
//     ${customerProfile.location.postcode}`
//?    placing element in the HTML tag, we use template literal here to make it a string
//?    that also holds a variable that can change. The notation is specific so that the string
//?    will also hold commas or spaces in the proper places

//     let customerDob = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     customerDob.className = 'customer-DOB'
//?    giving that HTML tag a class name
//     customerDob.innerHTML = `DOB: ${moment(customerDob[index].dob.date).format('ll')}`
//?    placing element in the HTML tag, this is tricky since within the template literal we have a function
//?    called, this function comes from a library we are linking and will give us a presentation of the
//?    information that we want. In this case it will show an abbreviated month first(ex: feb) then the day
//?    followed by a comma and then the year in 4 digit(ex: 1999)

//     let customerStart = document.createElement('p')
//?    creating a HTML tag and giving it a name
//     customerStart.className = 'customer-start'
//?    giving that HTML tag a class name
//     customerStart.innerHTML = `Customer since ${moment(customers[index].registered.date).format('ll')}`
//?    same as the above, calling template literal with a function to give the style we want

//?    this section is where we tell javascript to place the elements inside our new HTML tag "div"
//?    should add the HTML tags we made and the elements they hold in it
//     newDiv.appendChild(customerImg)
//     newDiv.appendChild(nameTitle)
//     newDiv.appendChild(customerPhone)
//     newDiv.appendChild(customerEmail)
//     newDiv.appendChild(customerAddress)
//     newDiv.appendChild(customerDob)
//     newDiv.appendChild(customerStart)

//     customerContainer.appendChild(newDiv)
//?    putting the new div into the entire "container" div tag
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
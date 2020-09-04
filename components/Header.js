// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

 const entryPoint = document.querySelector('.header-container')

function Header() {
    //instantiating the elements
    const head = document.createElement('div')
    const time = document.createElement('span')
    const h1 = document.createElement('h1')
    const temp = document.createElement('span')
    //structure
    head.appendChild(time)
    head.appendChild(h1)
    head.appendChild(temp)
    // adding class/attributes
    head.classList.add('header')
    time.classList.add('date')
    time.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    temp.classList.add('temp')
    temp.textContent = '98°'

    return head
}

entryPoint.appendChild(Header())



// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const entryPoint3 = document.querySelector('.cards-container')

fetch('https://lambda-times-api.herokuapp.com/articles')
    .then(partRes =>{
        return partRes.json()
    })
    .then(res =>{
        res.articles.javascript.map(item =>(
            entryPoint3.appendChild(Cards(item))
            ))
        res.articles.bootstrap.map(item =>(
            entryPoint3.appendChild(Cards(item))
            ))
        res.articles.jquery.map(item =>(
            entryPoint3.appendChild(Cards(item))
            ))
        res.articles.node.map(item =>(
            entryPoint3.appendChild(Cards(item))
            ))
        res.articles.technology.map(item =>(
            entryPoint3.appendChild(Cards(item))
            ))
    })
    .catch(err =>{
        console.log(err)
    })

// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

function Cards({ headline, authorPhoto, authorName }) {
    //instantiating the elements
    const card = document.createElement('div')
    const topic = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')
    // structure elements
    card.appendChild(topic)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(name)
    // add class/attributes
    card.classList.add('card')
    topic.classList.add('headline')
    topic.textContent = `${headline}`
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    img.src = authorPhoto
    name.textContent = `By ${authorName}`
    // event listener
    card.addEventListener('click', event =>{
        console.log(headline)
    })

    return card
}


// res.articles.javascript.map(item =>(
//     entryPoint3.appendChild(Cards(item))
// ))
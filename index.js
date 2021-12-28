 // getting data
        //create function that makes get request to kanyerest
            //get and proccess  response

const h1 = document.querySelector('h1')
const button = document.querySelector('button')


async function getQuote() {
    let response = await fetch("https://api.kanye.rest/");
    const data = await response.json()
    console.log(data.quote)    
    h1.innerText = data.quote   
}

button.addEventListener("click",getQuote)

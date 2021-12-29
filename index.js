 // getting data
        //create function that makes get request to kanyerest
            //get and proccess  response

const list = document.querySelector('#kanye-quote-history');
const button = document.querySelector('button'); 
const quote = document.querySelector("#kanye-quote");
const listItems = [];

function addToList(quoteToAdd){
    const newQuote = document.createElement("li");
    newQuote.innerText = quoteToAdd;
    list.appendChild(newQuote);
}


async function getQuote() {
    let response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    console.log(data.quote);
    quote.innerText = `"${data.quote}"`;

    if(listItems.includes(data.quote) === false){
        listItems.push(data.quote);
        addToList(data.quote);
    }
}

button.addEventListener("click",getQuote)

// to-do: append previous quotes to body when button is clicked
    // query select main container 
    // create unordered list element 
    // append new element to dom 


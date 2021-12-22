 // getting data
        //create function that makes get request to kanyerest
            //get and proccess  response


async function getQuote() {
    let response = await fetch("https://api.kanye.rest/");
    const data = await response.json()
    console.log(data)
    
}

console.log(getQuote())
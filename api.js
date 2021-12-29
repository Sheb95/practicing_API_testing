import fetch from "node-fetch";

export async function getQuote2() {
    let response = await fetch("https://api.kanye.rest/");
    const data = await response.json();
    return data.quote
}
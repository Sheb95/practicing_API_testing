import getQuote  from "./index.js";
// import enableMocks from "jest-fetch-mock";

// enableMocks();

/**
 * @jest-environment jsdom
 */



// test("API response is as expected", async function (){
//     // const actual = await getQuote2();

//     const expected = {
//         quote: expect.any(String)
//     };

//     expect(await getQuote2()).toStrictEqual(expected);
// });

it("API response is as expected", async () => {
    fetch.mockResponseOnce(JSON.stringify({quote: expect.any(String)}));

    const actual = await getQuote()
    // console.log(actual);

    const expected = {
        quote: expect.any(String)
    };

    expect(actual).toStrictEqual(expected);
    expect(fetch).toHaveBeenCalledTimes(1)

})
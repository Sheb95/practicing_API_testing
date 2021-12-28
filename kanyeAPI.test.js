import getQuote2  from "./api.js";
import enableMocks from "jest-fetch-mock";

enableMocks();

/**
 * @jest-environment jsdom
 */



test("API response is as expected", async function (){
    // const actual = await getQuote2();

    const expected = {
        quote: expect.any(String)
    };

    expect(await getQuote2()).toStrictEqual(expected);
});
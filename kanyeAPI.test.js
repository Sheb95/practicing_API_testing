import { getQuote2 }  from "./api.js";

// import {jest} from "@jest/globals";

// tests for real http response (better to mock)
test("should return quote", async() =>{
    const result = await getQuote2();
    expect(result).toEqual(expect.any(String));
})


//mocks response 


// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({quote : "string" })
//     }));

// beforeEach(() => {
//     fetch.mockClear();
// });





// it("gets a quote", async () => {
    
//     const actual = await getQuote2();
//     // console.log(actual);

//     const expected = 
//         "string"
//     ;

//     expect(actual).toBe(expected);
//     expect(fetch).toHaveBeenCalledTimes(1)

// });
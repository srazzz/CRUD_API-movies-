// reference link  : https://www.freecodecamp.org/news/end-point-testing/ 
// Supertest is a Node. js library that allows developers and testers to test the APIs
const app = require("../app"); // Link to your server file
const request = require("supertest");
const { json } = require("express");



// //   ++++++++working+++++++
// test('should add new movie' , async() =>{
//     await request (app).post("/")
//     .send({
//         movie_title : "testing the tesst filett",
//         genre : "action"
//     })
//     .expect(201)

// })

// test('should get  mvoies data' , async() =>{
//     await request (app).get("/")

//     .expect(200)

// })
// test('should get  mvoies data by is' , async() =>{
//     await request (app).get("/63d12ac97d8a1a3f56e91e8f")
//     .expect(200)

// })
// test('should update mvoies data' , async() =>{
//     await request (app).patch("/63d8ef21d76f8b1354cb7284")
//     .send({
//         movie_title : "post test2",
//         genre : "action patch"
//     })
//     .expect(200)

// })

// test('should delete  mvoies data' , async() =>{
//     await request (app).delete("/63dba87987d9680dbdddd001")
//     .expect(200)

// })
// // ++++++++++++








// describe("gets the test endpoint",  done => {
// it("Should save user to database", async done => {
//      await request(app).post("/").send({
//         movie_title : "testing the tesst file2",
//          genre : "action22"
//     });

//     // Searches the user in the database
//     const user = await Data.findOne({ movie_title: "testing the tesst file2" });

//     done();
//   }) })

// const Data = require("../models/schema")
// const request = supertest(app);
// Once you do this, you get the ability to send GET, POST, PUT, PATCH and DELETE requests

// describe("gets the test endpoint",  done => {
//     it('/get', async () => {
//     const response = await request.get("/get");

//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe(json());
//     done();
// });
//   });

describe('Testing crud operations', () => {
    it('tests  endpoints', async () => {
        try {

            const response = await request(app).get("/");
            // here we can also use toMatchObject({}) 
            expect(response.body).toStrictEqual({});
            expect(response.statusCode).toBe(200);
        }
        catch (err) {
            console.error(err.message);
        }
    });

    it('test get by id', async () => {
        try {
            const response = await request(app).get("/63d12ac97d8a1a3f56e91e8f");
            // here we can also use toMatchObject({}) 
            expect(response.body).toEqual(expect.objectContaining({
                movie_title: "ek kathaaaa",
                genre: "Adventure",

            }),);

            expect(response.statusCode).toBe(200);
        }
        catch (err) {
            console.error(err.message);
        }

    });

    it('test create', async () => {
        try {
            const response = await request(app).post("/").send({
                movie_title: "3",
                genre: "action22"
            });

            expect(response.body).toEqual(expect.objectContaining({
                movie_title: "3",
                genre: "action22"
            }),);
            // expect(response.statusCode).toBe(500);
            expect(response.statusCode).toBe(201);
            
        }
       
        catch (err) {
            console.error(err.message);
        }
    });

    // it('test delete by id', async () => {
    //     try {
    //         const response = await request(app).delete("/63dba8522656cc98857089c4");
    //         // here we can also use toMatchObject({}) 
    //         expect(response.body).toEqual(expect.objectContaining({
    //             movie_title: "testing the tesst filett",

    //         }),);

    //         expect(response.statusCode).toBe(200);
    //     }
    //     catch (err) {
    //         console.error(err.message);
    //     }

    // });



    it('test update ', async () => {
        try {
            const response = await request(app).patch("/63d12ac97d8a1a3f56e91e8").send({
                mpaa_rating: "GG"
            });
            if (response.statusCode === 400) {
                throw new Error('Bad Request');
                
            }
    
            expect(response.body).toEqual(expect.objectContaining({
                _id: "63d12ac97d8a1a3f56e91e8f",
                movie_title: "ek kathaaaa",
                mpaa_rating: "GG",

            }),);
            // expect(response.statusCode).toBe(500);
            expect(response.statusCode).toBe(200);
        }
        catch (err) {
            console.error(err.message);
        }

    });

});


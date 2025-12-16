import supertest  from "supertest"
import {web} from "../src/application/express.js"
import {logger} from "../src/application/logging.js"
import {createTestUser, getTestUser, removeTestUser} from "./test-util.js";
import bcrypt from "bcrypt";

// describe('POST /api/users', ()=>{

//     it('should can register new user',async ()=>{
//         const result = await supertest(web)
//             .post('/api/users')
//             .send({
//                 username: "khannedy",                
//                 password: "12345",
//                 name: "eko kurniawan"
//             })
        
//             expect(result.status).toBe(200);
//             expect(result.body.data.username).toBe("khannedy");
//             expect(result.body.data.name).toBe("eko kurniawan");
//             expect(result.body.data.password).toBeUndefined();
            
//     })

//     it('should reject if request is invalid',async ()=>{
//         const result = await supertest(web)
//             .post('/api/users')
//             .send({
//                 username: "",
//                 password: "",
//                 name: ""
//             })
        
//             logger.info(result.body)
//             expect(result.status).toBe(400);
//             expect(result.body.errors).toBeDefined()
            
            
//     })

//     it('should can register new user',async ()=>{
//         const result = await supertest(web)
//             .post('/api/users')
//             .send({
//                 username: "khannedy",                
//                 password: "12345",
//                 name: "eko kurniawan"
//             })
        
//             expect(result.status).toBe(200);
//             expect(result.body.data.username).toBe("khannedy");
//             expect(result.body.data.name).toBe("eko kurniawan");
//             expect(result.body.data.password).toBeUndefined();


//         const result_registered = await supertest(web)
//             .post('/api/users')
//             .send({
//                 username: "khannedy",                
//                 password: "12345",
//                 name: "eko kurniawan"
//             })
        
//             logger.info(result_registered.body)
//             expect(result_registered.status).toBe(400);
//             expect(result_registered.body.errors).toBeDefined();
            
            
//     })


//     it("should can be login", async()=>{
//         const result = await supertest(web)
//             .post('/api/users/login')
//             .send({
//                 username: "khannedy",                
//                 password: "12345",
//             })

//             logger.info(result.body);
//             expect(result.status).toBe(200);
//             expect(result.body.data.token).toBeDefined();
//             expect(result.body.token).not.toBe("7495949f-3a51-40f2-9783-96a515dfadbb");
//     })

//     it("should can be get User", async()=>{
//         const result = await supertest(web)
//             .get('/api/users/current')
//             .set('Authorization', '58d10f59-01f1-47d2-b246-b9e1eb0c4937');

//             logger.info(result.body);
//             logger.info(result.status);
            
//             expect(result.status).toBe(200);
//             expect(result.body.username).toBe("khannedy");
//             expect(result.body.name).toBe("eko kurniawan");
            
//     })
// })


// describe('GET /api/users/current', function () {
//     beforeEach(async () => {
//         await createTestUser();
//     });

//     afterEach(async () => {
//         await removeTestUser();
//     });

//     it('should can get current user', async () => {
//         const result = await supertest(web)
//             .get('/api/users/current')
//             .set('Authorization', 'test');

//         expect(result.status).toBe(200);
//         expect(result.body.data.username).toBe('test');
//         expect(result.body.data.name).toBe('test');
//     });

//     it('should reject if token is invalid', async () => {
//         const result = await supertest(web)
//             .get('/api/users/current')
//             .set('Authorization', 'salah');

//         expect(result.status).toBe(401);
//         expect(result.body.errors).toBeDefined();
//     });
// });

// describe('PATCH /api/users/current', function () {
    // beforeEach(async () => {
    //     await createTestUser();
    // });

    // afterEach(async () => {
    //     await removeTestUser();
    // });

    // it('should can update user', async () => {
    //     const result = await supertest(web)
    //         .patch("/api/users/current")
    //         .set("Authorization", "test")
    //         .send({
    //             name: "Eko",
    //             password: "rahasialagi"
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.username).toBe("test");
    //     expect(result.body.data.name).toBe("Eko");

    //     const user = await getTestUser();
    //     expect(await bcrypt.compare("rahasialagi", user.password)).toBe(true);
    // });

    // it('should can update user name', async () => {
    //     const result = await supertest(web)
    //         .patch("/api/users/current")
    //         .set("Authorization", "test")
    //         .send({
    //             name: "Ekono"
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.username).toBe("test");
    //     expect(result.body.data.name).toBe("Ekono");
    // });

    // it('should can update user password', async () => {
    //     const result = await supertest(web)
    //         .patch("/api/users/current")
    //         .set("Authorization", "test")
    //         .send({
    //             password: "rahasialagi"
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.username).toBe("test");
    //     expect(result.body.data.name).toBe("test");

    //     const user = await getTestUser();
    //     expect(await bcrypt.compare("rahasialagi", user.password)).toBe(true);
    // });

    // it('should reject if request is not valid', async () => {
    //     const result = await supertest(web)
    //         .patch("/api/users/current")
    //         .set("Authorization", "salah")
    //         .send({});

    //     expect(result.status).toBe(401);
    // });

    
// });

// describe('DELETE /api/users/logout', function () {
//     beforeEach(async () => {
//         await createTestUser();
//     });

//     afterEach(async () => {
//         await removeTestUser();
//     });

    // it('should can logout', async () => {
    //     const result = await supertest(web)
    //         .delete('/api/users/logout')
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(200);
    //     expect(result.body.data).toBe("OK");

    //     const user = await getTestUser();
    //     expect(user.token).toBeNull();
    // });

//     it('should reject logout if token is invalid', async () => {
//         const result = await supertest(web)
//             .delete('/api/users/logout')
//             .set('Authorization', 'salah');

//         expect(result.status).toBe(401);
//     });

// })
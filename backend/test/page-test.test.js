import {
    createTestAddress,
    createTestContact,
    createTestUser, getTestAddress, getTestContact,
    removeAllTestAddresses,
    removeAllTestContacts,
    removeTestUser
} from "./test-util.js";

import supertest from "supertest";
import {web} from "../src/application/express.js";

// describe('POST /api/contacts/:folderId/pages', function () {
    // beforeEach(async () => {
    //     await createTestUser();
    //     await createTestContact();
    // })

    // afterEach(async () => {
    //     await removeAllTestAddresses();
    //     await removeAllTestContacts();
    //     await removeTestUser();
    // })

    // it('should can create new page', async () => {
    //     // const testContact = await getTestContact();
        
    //     const result = await supertest(web)
    //         .post('/api/folders/1/pages')
    //         .set('Authorization', 'test')
    //         .send({
    //             title:"test2",
    //             description:"catatan1"
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.id).toBeDefined();
    //     expect(result.body.data.title).toBe('test2');
    //     expect(result.body.data.description).toBe('catatan1');
    // });

    // it('should reject if page request is invalid', async () => {
    //     // const testContact = await getTestContact();
        
    //     const result = await supertest(web)
    //         .post('/api/folders/6/pages')
    //         .set('Authorization', 'test')
    //         .send({
    //             title:"",
    //             description:"catatan1"
    //         });

    //     expect(result.status).toBe(400);
    // });
    // it('should reject if address request is invalid', async () => {
    //     const testContact = await getTestContact();

    //     const result = await supertest(web)
    //         .post('/api/contacts/' + testContact.id + '/addresses')
    //         .set('Authorization', 'test')
    //         .send({
    //             street: "jalan test",
    //             city: 'kota test',
    //             province: 'provinsi test',
    //             country: '',
    //             postal_code: ''
    //         });

    //     expect(result.status).toBe(400);
    // });

    // it('should reject if contact is not found', async () => {
    //     const testContact = await getTestContact();

    //     const result = await supertest(web)
    //         .post('/api/contacts/' + (testContact.id + 1) + '/addresses')
    //         .set('Authorization', 'test')
    //         .send({
    //             street: "jalan test",
    //             city: 'kota test',
    //             province: 'provinsi test',
    //             country: '',
    //             postal_code: ''
    //         });

    //     expect(result.status).toBe(404);
    // });
// });

describe('GET /api/folders/:folderId/pages/:pageId', function () {

    it('should can get page', async () => {
        // const testFolder = await getTestFolder();

        const result = await supertest(web)
            .get("/api/folders/3/pages/7")
            .set('Authorization', '48a5e798-8c7a-44b8-9e2c-45e91534d3ee');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(7);
        expect(result.body.data.title).toBe("ini adalah catatan pertama v2 udah ada page");
        expect(result.body.data.description).toBe("ini adalah isi content oke")
        
    });

    // it('should return 404 if contact id is not found', async () => {
        

    //     const result = await supertest(web)
    //         .get("/api/folders/6/pages/2")
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(404);
    // });


    // beforeEach(async () => {
    //     await createTestUser();
    //     await createTestFolder();
    // })

    // afterEach(async () => {
    //     await removeAllTestFolders();
    //     await removeTestUser();
    // })

    // it('should can get contact', async () => {
    //     const testContact = await getTestContact();

    //     const result = await supertest(web)
    //         .get("/api/folders/" + testContact.id)
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.id).toBe(testContact.id);
    //     expect(result.body.data.first_name).toBe(testContact.first_name);
    //     expect(result.body.data.last_name).toBe(testContact.last_name);
    //     expect(result.body.data.email).toBe(testContact.email);
    //     expect(result.body.data.phone).toBe(testContact.phone);
    // });

    // it('should return 404 if contact id is not found', async () => {
    //     const testContact = await getTestContact();

    //     const result = await supertest(web)
    //         .get("/api/folders/" + (testContact.id + 1))
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(404);
    // });
    

    
});


// describe("PUT /api/folders/:folderId/pages/1", ()=>{
    // it("can should be update folder ", async()=>{
    //     const result = await supertest(web)
    //         .put("/api/folders/6/pages/1")
    //         .set('Authorization', 'test')
    //         .send({
    //             title: "test10",
    //             description : "catatan baru"
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.id).toBeDefined();
    //     expect(result.body.data.title).toBe("test10");
    //     expect(result.body.data.description).toBe("catatan baru");

    // })

//     it('should return 404 if contact id is not found', async () => {
//         const result = await supertest(web)
//             .put("/api/folders/6/pages/3")
//             .set('Authorization', 'test')
//             .send({
//                 title : "ini adalah contoh ke lima"
//             })

//         expect(result.status).toBe(404);
//     });
// })

// describe("DELETE /api/folders/:folderId/pages/:pageId", ()=>{
    // it("should be delete folders", async() =>{
    //     const result = await supertest(web)
    //         .delete("/api/folders/6/pages/1")
    //         .set('Authorization', 'test')
            

    //     expect(result.status).toBe(200);
    //     expect(result.body.data).toBe("OK");
    //     expect(result.body.data.title).toBeUndefined();
    // })

//     it("should reject if folder not found", async() =>{
//         const result = await supertest(web)
//             .delete("/api/folders/6/pages/1")
//             .set('Authorization', 'test')
            

//         expect(result.status).toBe(404);
        
//     })

// })



// describe("POST /api/folders/:folderId/pages ",()=>{
    // it("should be show list of page",async()=>{
        
    //     // const testFolder = await getTestFolder();

    //     const result = await supertest(web)
    //         .get("/api/folders/6/pages")
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.length).toBe(4);
        
    
    // })

//     it("should be show list of page",async()=>{
        
//         // const testFolder = await getTestFolder();

//         const result = await supertest(web)
//             .get("/api/folders/5/pages")
//             .set('Authorization', 'test');

//         expect(result.status).toBe(404);
        
        
    
//     })
// })
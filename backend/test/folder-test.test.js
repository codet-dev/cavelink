import {
    createManyTestFolders,
    createTestFolder,
    createTestUser,
    getTestFolder,
    removeAllTestFolders,
    removeTestUser
} from "./test-util.js";
import supertest from "supertest";
import {web} from "../src/application/express.js";
import {logger} from "../src/application/logging.js";

// describe('POST /api/folders', function () {
//     beforeEach(async () => {
//         await createTestUser();
//     })

//     afterEach(async () => {
//         await removeAllTestFolders();
//         await removeTestUser();
//     })

    // it('should can create new contact', async () => {
    //     const result = await supertest(web)
    //         .post("/api/folders")
    //         .set('Authorization', 'test')
    //         .send({
    //             title: "titleV2",
    //         });

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.id).toBeDefined();
    //     expect(result.body.data.title).toBe("titleV2");
    // });

//     it('should reject if request is not valid', async () => {
//         const result = await supertest(web)
//             .post("/api/folders")
//             .set('Authorization', 'test')
//             .send({
//                 title: ''
//             });

//         expect(result.status).toBe(400);
//         expect(result.body.errors).toBeDefined();
//     });
// });


describe('GET /api/folders/:folderId', function () {

    it('should can get contact', async () => {
        const testFolder = await getTestFolder();

        const result = await supertest(web)
            .get("/api/folders/5")
            .set('Authorization', 'test');

        expect(result.status).toBe(200);
        expect(result.body.data.id).toBe(2);
        expect(result.body.data.title).toBe("test");
        
    });

    // it('should return 404 if contact id is not found', async () => {
        

    //     const result = await supertest(web)
    //         .get("/api/folders/7")
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


// describe("PUT /api/folders/:folderId", ()=>{
//     it("can should be update folder ", async()=>{
//         const result = await supertest(web)
//             .put("/api/folders/3")
//             .set('Authorization', 'test')
//             .send({
//                 title: "test10",
//             });

//         expect(result.status).toBe(200);
//         expect(result.body.data.id).toBeDefined();
//         expect(result.body.data.title).toBe("test10");

//     })

//     it('should return 404 if contact id is not found', async () => {
//         const result = await supertest(web)
//             .put("/api/folders/8")
//             .set('Authorization', 'test')
//             .send({
//                 title : "ini adalah contoh ke lima"
//             })

//         expect(result.status).toBe(404);
//     });
// })


// describe("DELETE /api/folders/:folderId", ()=>{
    // it("should be delete folders", async() =>{
    //     const result = await supertest(web)
    //         .delete("/api/folders/3")
    //         .set('Authorization', 'test')
            

    //     expect(result.status).toBe(200);
    //     expect(result.body.data).toBe("OK");
    //     expect(result.body.data.title).toBeUndefined();
    // })

//     it("should reject if folder not found", async() =>{
//         const result = await supertest(web)
//             .delete("/api/folders/3")
//             .set('Authorization', 'test')
            

//         expect(result.status).toBe(404);
        
//     })


// })


// describe('GET /api/folders', function () {
    // beforeEach(async () => {
    //     await createTestUser();
    //     await createManyTestFolders();
    // })

    // afterEach(async () => {
    //     await removeAllTestFolders();
    //     await removeTestUser();
    // })

    // it('should can search without parameter', async () => {
    //     const result = await supertest(web)
    //         .get('/api/folders')
    //         .set('Authorization', 'test');

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.length).toBe(10);
    //     expect(result.body.paging.page).toBe(1);
    //     expect(result.body.paging.total_page).toBe(2);
    //     expect(result.body.paging.total_item).toBe(14);
    // });

    // it('should can search to page 2', async () => {
    //     const result = await supertest(web)
    //         .get('/api/folders')
    //         .query({
    //             page: 2
    //         })
    //         .set('Authorization', 'test');

    //     logger.info(result.body);

    //     expect(result.status).toBe(200);
    //     expect(result.body.data.length).toBe(4);
    //     expect(result.body.paging.page).toBe(2);
    //     expect(result.body.paging.total_page).toBe(2);
    //     expect(result.body.paging.total_item).toBe(14);
    // });

//     it('should can search using name', async () => {
//         const result = await supertest(web)
//             .get('/api/folders')
//             .query({
//                 title: "test2"
//             })
//             .set('Authorization', 'test');

//         logger.info(result.body);

//         expect(result.status).toBe(200);
//         expect(result.body.data.length).toBe(10);
//         expect(result.body.paging.page).toBe(1);
//         expect(result.body.paging.total_page).toBe(2);
//         expect(result.body.paging.total_item).toBe(13);
//     });

    
// });
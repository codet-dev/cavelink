import {prismaClient} from "../src/application/database.js";
import bcrypt from "bcrypt";

export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: "test2"
        }
    })
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: "test2",
            password: await bcrypt.hash("rahasia", 10),
            name: "test",
            token: "test"
        }
    })
}

export const getTestUser = async () => {
    return prismaClient.user.findUnique({
        where: {
            username: "test2"
        }
    });
}

export const removeAllTestFolders = async () => {
    await prismaClient.folder.deleteMany({
        where: {
            user_id: 'test2'
        }
    });
}

export const createTestFolder = async () => {
    await prismaClient.folder.create({
        data: {
            title: "test"
        }
    })
}

export const createManyTestFolders = async () => {
    for (let i = 0; i < 15; i++) {
        await prismaClient.folder.create({
            data: {
                title: `test`,
            }
        })
    }
}

export const getTestFolder = async () => {
    return prismaClient.folder.findFirst({
        where: {
            id: '2'
        }
    })
}

export const removeAllTestAddresses = async () => {
    await prismaClient.address.deleteMany({
        where: {
            contact: {
                username: "test"
            }
        }
    });
}

export const createTestAddress = async () => {
    const contact = await getTestContact();
    await prismaClient.address.create({
        data: {
            contact_id: contact.id,
            street: "jalan test",
            city: 'kota test',
            province: 'provinsi test',
            country: 'indonesia',
            postal_code: '234234'
        }
    })
}

export const getTestAddress = async () => {
    return prismaClient.address.findFirst({
        where: {
            contact: {
                username: "test"
            }
        }
    })
}


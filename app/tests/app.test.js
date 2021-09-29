import { app } from "./../src/App";
import request from "supertest";
import models from "./../src/models";

describe("testes de integracao", () => {
    beforeEach(async () => {
        await models.produto.destroy({ where: {} })
    })

    const payloadRequest = {
        codigo: "test",
        descricao: "test",
        preco: 200
    }

    test('rota get /main', () => {
        return request(app).get('/main')
            .then(res => expect(res.status).toBe(200))
    })

    test('rota post /main', async () => {
        const res = await request(app)
            .post('/main')
            .send(payloadRequest)
        ;
        expect(res.status).toBe(201);
    })

    // test('rota put /main', async () => {
    //     const res = await request(app)
    //         .put('/main')
    //         .send(payloadRequest)
    //     ;
    //     expect(res.status).toBe(201);
    // })

    test('rota delet /main', async () => {
        const res = await request(app)
            .delete('/main/1')
            .send()
        ;
        expect(res.status).toBe(200);
    })
})
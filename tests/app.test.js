const request = require('supertest');
const app = require('../index');

describe('API Test', () => {
    it('GET /', () => {
        return request(app)
        .get('/')
        .expect(200).then((res) => {
            expect(res.body).toBeDefined();
        })
})
})

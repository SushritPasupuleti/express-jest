const request = require('supertest');
const app = require('../index');

describe('API Test', () => {
    it('GET /', () => {
        return request(app)
        .get('/')
        .expect('Content-Type', /json/)
        .expect(200)
})
})

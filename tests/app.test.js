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

    it('GET /hello-there', () => {
        return request(app)
            .get('/hello-there')
            .expect(200).then((res) => {
                expect(res.body).toBeDefined();
            })
    })

    afterAll(done => {
        app.close(done);
      });
})

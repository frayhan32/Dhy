var chai = require('chai'),
    chaiHttp = require('chai-http'),
    expect = require('chai').expect;

var app = require('../app');

chai.use(chaiHttp);


describe('Hospital API test', function () {
    describe('Get all hospital', function () {
        it('It should get all medicine', function () {
            return chai.request(app)
                .get('/api/v1/medicine/')
                .then(function (res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                })
        })
    });
});

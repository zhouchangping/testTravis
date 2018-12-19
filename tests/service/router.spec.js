const superagent = require('supertest');
const app = require('../../app');

function request() {
    return superagent(app.listen());
}
const requestProxy = request();
describe("node接口测试", function () {
    before('must be on home page', function (done) {
        requestProxy.get('/')
            .expect(200, done);
    });
    it("test 接口测试", function (done) {
        requestProxy
            .get('/')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                if (res.body.data == "Hello World!") {
                    done();
                } else {
                    done(new Error("接口数据异常"));
                }
            });
    });
});
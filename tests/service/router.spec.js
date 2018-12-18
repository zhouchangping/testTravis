const superagent = require('supertest');
const app = require('../../app.js');
function request() {
	return superagent(app.listen);
}

const requestProxy = request();

describe('node接口测试', function () {
	before('must be on home page', function (done) {
		requestProxy.get('/')
		.expect(200, done);
	});
	it("test 接口测试", function (data) {
		requestProxy
		.get('/')
		.expect("Content-Type", /json/)
		.expect(200)
		.end(function (err, res) {
			if (err) {
				return done(err);
			}
			if (res.body.data == "1") {
				done();
			} else {
				done(new Error('接口数据异常'));
			}
		});
	});
});
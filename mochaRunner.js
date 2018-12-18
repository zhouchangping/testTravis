const Mocha = require('mocha');
const mocha = new Mocha({
	reporter: 'mochawesome',
	reporterOptions: {
		reportDir: "./docs/mochawesome-reporter"
	}
});

mocha.addFile('./tests/service/router.spec.js');
mocha.run(function (errorLength) {
	if (errorLength > 0) {
		console.log('单元测试失败');
	} else{
		console.log('单元测试成功');
		process.exit();
	}
})

const PCAction = require('../src/PCAction.js');

describe('the PCAction.js class', () => {
	it('should return correct goToPage', () => {
		expect.assertions(2);

		const json_obj = PCAction.goToPage('hi');

		expect(json_obj.pageId).toBe('hi');
		expect(json_obj.type).toBe('goToPage');
	});
});

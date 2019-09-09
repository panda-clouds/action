class PCAction {
	constructor() {
		// Empty Constructor
	}

	static goToPage(pageId) {
		return { type: 'goToPage', pageId: pageId };
	}
}

module.exports = PCAction;

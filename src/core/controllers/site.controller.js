const siteController = {
	async home(req, res, next) {
		return res.render('index.pug');
	},

	// RESTful API standard.
	async index(req, res, next) {},
	async new(req, res, next) {},
	async create(req, res, next) {},
	async show(req, res, next) {},
	async edit(req, res, next) {},
	async update(req, res, next) {},
	async delete(req, res, next) {}
};

export default siteController;

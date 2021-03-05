import cors from 'cors';
import siteRoutes from './site.routes.js';

export default (app) => {
	app.use(cors());
	app.use('/', siteRoutes);
};

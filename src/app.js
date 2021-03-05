import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import mongoDB from './db/MongoDB.js';
import routes from './routes/index.js';

(async () => {
	const app = express();
	const host = process.env.HOST || 'localhost';
	const port = process.env.PORT || 3000;

	app.set('view engine', 'pug');
	app.set('views', path.join(path.resolve(), 'public/views'));

	app.use(morgan('dev'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(express.static(path.join(path.resolve(), 'public')));

	routes(app);
	await mongoDB.connect();
	app.listen(port, () => {
		console.log(`App listening at ${host}:${port}`);
	});
})();

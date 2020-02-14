const mongoose = require('mongoose');

mongoose.Promise = Promise;

let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
	mongoURI = process.env.DB_URL;
} else {
	mongoURI = 'mongodb://localhost/movie';
}

mongoose
	.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((instance) => {
		console.log(`connected to db: ${instance.connections[0].name}`);
	})
	.catch((error) => console.log(error));

module.exports = mongoose;

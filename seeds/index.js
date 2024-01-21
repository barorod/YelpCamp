const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelper');
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
	console.log('Database Connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
	await Campground.deleteMany({});
	for (let i = 0; i < 300; i++) {
		const random1000 = Math.floor(Math.random() * 1000);
		const price = Math.floor(Math.random() * 20) + 10;
		const camp = new Campground({
			author: '659d5ef011e2a404dd6bdad8',
			location: `${cities[random1000].city}, ${cities[random1000].state}`,
			geometry: {
				type: 'Point',
				coordinates: [
					cities[random1000].longitude,
					cities[random1000].latitude,
				],
			},
			title: `${sample(descriptors)} ${sample(places)}`,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, officiis sit. Consequuntur nesciunt, accusantium repudiandae, dignissimos, quod ipsam in cumque itaque quas doloribus ducimus sequi ipsum id nobis illo expedita.',
			price,
			images: [
				{
					url: 'https://res.cloudinary.com/dgxczjtfa/image/upload/v1705150624/YelpCamp/ezqtn81ccblvfiwtd1wp.png',
					filename: 'YelpCamp/ezqtn81ccblvfiwtd1wp',
				},
				{
					url: 'https://res.cloudinary.com/dgxczjtfa/image/upload/v1705150625/YelpCamp/igrjy3eoescgegld2uf2',
					filename: 'YelpCamp/igrjy3eoescgegld2uf2',
				},
			],
		});
		await camp.save();
	}
};

seedDB().then(() => {
	mongoose.connection.close();
});

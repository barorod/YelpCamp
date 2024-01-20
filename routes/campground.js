const express = require('express');
const router = express.Router();
const campgrounds = require('../controllers/campgrounds');
const {
	isLoggedIn,
	isAuthor,
	validateCampground,
	validateObjectId,
} = require('../middleware');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });

const Campground = require('../models/campground');

router
	.route('/')
	.get(catchAsync(campgrounds.index))
	.post(
		isLoggedIn,
		upload.array('image'),
		validateCampground,
		catchAsync(campgrounds.createCampground)
	);

router.get('/new', isLoggedIn, campgrounds.renderNewForm);

router
	.route('/:id')
	.get(validateObjectId, catchAsync(campgrounds.showCampground))
	.put(
		isLoggedIn,
		isAuthor,
		upload.array('image'),
		validateObjectId,
		validateCampground,
		catchAsync(campgrounds.updateCampground)
	)
	.delete(
		isLoggedIn,
		isAuthor,
		validateObjectId,
		catchAsync(campgrounds.deleteCampground)
	);

router.get(
	'/:id/edit',
	isLoggedIn,
	isAuthor,
	validateObjectId,
	catchAsync(campgrounds.renderEditForm)
);

module.exports = router;

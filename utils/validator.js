const { isValidObjectId } = require("mongoose");
const ExpressError = require("./ExpressError");
const { campgroundSchema } = require("../schemas");

// Middleware to validate ObjectId
const validateObjectId = (req, res, next) => {
	const { id } = req.params;
	if (!isValidObjectId(id)) {
		req.flash("error", "Invalid Campground URL");
		return res.redirect(303, "/campgrounds");
	}
	next();
};

// Middleware to validate campground data
const validateCampground = (req, res, next) => {
	const { error } = campgroundSchema.validate(req.body);
	if (error) {
		const msg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(msg, 400);
	} else {
		next();
	}
};

module.exports = { validateObjectId, validateCampground };

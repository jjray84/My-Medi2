const { Schema } = require("mongoose");

const emergencyContactSchema = new Schema({
	first_name: {
		type: String,
		required: true,
	},

	last_name: {
		type: String,
		required: true,
	},

	relationship: {
		type: String,
	},

	phone_number: {
		type: Number,
		required: true,
	},

	power_of_attorney: Boolean,
});

module.exports = { emergencyContactSchema };

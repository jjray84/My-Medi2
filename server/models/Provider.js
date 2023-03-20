const { Schema } = require("mongoose");

const providerSchema = new Schema({
	name: {
		type: String,
		required: true,
	},

	specialty: {
		type: String,
	},

	phone_number: {
		type: String,
	},
});

module.exports = { providerSchema };

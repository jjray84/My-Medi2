const { Schema } = require("mongoose");

const medicationSchema = new Schema({
	drug_name: {
		type: String,
		required: true,
	},
	dosage: {
		type: Decimal128,
		required: true,
	},
	unit: {
		type: String,
		rquired: true,
	},
	administration_frequency: {
		type: [String],
		default: "Daily",
		required: true,
	},
	administration_times: {
		type: [String],
		required: true,
	},
});

module.exports = { medicationSchema };

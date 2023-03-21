const { Schema, Types } = require("mongoose");

const medicationSchema = new Schema({
	drug_name: {
		type: String,
		required: true,
	},

	dosage: {
		type: Types.Decimal128,
		required: true,
	},

	unit: {
		type: String,
		rquired: true,
	},

	route: {
		type: String,
		required: true,
		default: "By mouth",
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

	reason: {
		type: String,
		required: true,
	},

	prescribing_provider: {
		type: String,
	},
});

module.exports = { medicationSchema };

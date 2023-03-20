const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const emergencyContactSchema = require("./EmergencyContact");
const medicationSchema = require("./Medication");

const userScehma = new Schema({
	username: {
		type: String,
		require: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/.+@.+\..+/, "Must match an email address!"],
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	emergency_contacts: [emergencyContactSchema],
	allergies: {
		type: [String],
		default: "No Known Allergies",
	},
	code_status: {
		type: String,
		default: "Full Code",
	},
	advanced_directive: {
		type: Boolean,
	},
	medications: [medicationSchema],
});

const User = model("User", userScehma);

module.exports = User;

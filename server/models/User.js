const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
	emergency_contacts: [
		{
			first_name: {
				type: String,
				required: true,
			},
			last_name: {
				type: String,
				required: true,
			},
			phone_number: {
				type: Number,
				required: true,
			},
		},
	],
});

const User = model("User", userScehma);

module.exports = User;

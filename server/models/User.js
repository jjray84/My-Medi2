const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const emergencyContactSchema = require("./EmergencyContact");
const medicationSchema = require("./Medication");
const providerSchema = require("./Provider");

const userSchema = new Schema({
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

	first_name: {
		type: String,
		required: true,
	},

	last_name: {
		type: String,
		required: true,
	},

	date_of_birth: {
		type: Date,
		required: true,
	},

	sex: {
		type: String,
		required: true,
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

	religious_preferences: {
		type: String,
	},

	providers: [providerSchema],

	medical_history: {
		type: [String],
		default: "No medical history",
	},

	surgical_history: {
		type: [String],
		default: "No surgical history",
	},

	medications: [medicationSchema],
});

// if user is new or password has been modified, scramble password
userSchema.pre("save", async function (next) {
	if (this.isNew || this.isModified("password")) {
		this.password = await bcrypt.hash(this.password, 10);
	}

	next();
});

userSchema.methods.verifyPassword = async function (password) {
	return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;

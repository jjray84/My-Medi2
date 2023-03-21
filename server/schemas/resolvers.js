const { User } = require("../models");

const resolvers = {
	Query: {
		users: async () => await User.find({}),
	},
};

module.exports = resolvers;

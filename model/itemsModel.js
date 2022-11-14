const mongoose = require("mongoose");

const itemModel = mongoose.Schema(
	{
		name: {
			type: String,
		},
		description: {
			type: String,
		},

		quantity: {
			type: Number,
		},
		given: {
			type: Number,
		},
		balance: {
			type: Number,
		},

		ordered: {
			type: Boolean,
		},
		like: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'likes',
		} ],
		rating: [ {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'ratings',
		} ],

		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "users",
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("items", itemModel);

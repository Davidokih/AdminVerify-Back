const mongoose = require("mongoose");

const likeModel = mongoose.Schema(
    {
        count: {
            type: number,
        },

        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "items",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
    },

    { timestamps: true }
);

module.exports = mongoose.model("likes", likeModel);

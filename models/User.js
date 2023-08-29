const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
});

userSchema.index({ firstname: 1 });
userSchema.index({ lastname: 1 });

module.exports = mongoose.model("User", userSchema);

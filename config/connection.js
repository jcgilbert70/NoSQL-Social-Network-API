const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/social-network-api",
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

// logs mongo
mongoose.set("Debug", true);

module.exports = mongoose.connection;
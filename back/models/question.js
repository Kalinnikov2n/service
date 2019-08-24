const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/game', { useNewUrlParser: true });

const qSchema = new mongoose.Schema({
    qu: String,
    ans: String,
    score: String,
    cat: String
});
const Q= mongoose.model('questions', qSchema);
module.exports = Q;
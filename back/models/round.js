const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/game', { useNewUrlParser: true });

const roundSchema = new mongoose.Schema({
    user: String,
    game: String,
    score: String,
});
const Round = mongoose.model('rounds', roundSchema);
module.exports = Round;
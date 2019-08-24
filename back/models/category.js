const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/game', { useNewUrlParser: true });

const catSchema = new mongoose.Schema({
    title: String,
    numberOfQ: Number,
    game: String,
});
const Cat= mongoose.model('category', catSchema);
module.exports = Cat;
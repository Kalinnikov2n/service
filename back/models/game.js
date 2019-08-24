const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/game', { useNewUrlParser: true });

const gameSchema = new mongoose.Schema({
    title: String,
    numberOfCat: Number
   
});
const Game= mongoose.model('games', gameSchema);
module.exports = Game;

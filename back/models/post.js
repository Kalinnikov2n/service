const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ka_ll:kmn6114786@cluster0-dhab9.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true });

const postSchema = new mongoose.Schema(
    {
    title: String,
    description: String,
    imgUrl: String,
    user: String
    }
  );
  

  const Post = mongoose.model('posts', postSchema);
  module.exports = Post;
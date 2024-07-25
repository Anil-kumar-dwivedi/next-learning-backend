import mongoose from "mongoose";

//defining schema
const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, required: true, trim: true },
});

// compiling schema
const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;

import connectDB from "@/lib/connectDB";
import Post from "@/models/Post";
//this is know as server action
const create = async (formData) => {
  "use server";
  await connectDB();
  const result = await Post.create({
    title: formData.get("title"),
    body: formData.get("body"),
  });
  console.log(result);
};
function PostData2() {
  return (
    <form action={create}>
      Title :
      <input type="text" name="title" className="text-black p-2 m-4" />
      <br />
      Body :
      <input type="text" name="body" className="text-black p-2 m-4" />
      <br />
      <button type="submit" className="p-2 bg-rose-600">
        Submit
      </button>
    </form>
  );
}

export default PostData2;

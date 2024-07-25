import connectDB from "@/lib/connectDB";
import PostModel from "@/models/Post";
import React from "react";

async function GetData2() {
  await connectDB();
  const allPosts = await PostModel.find();
  console.log(allPosts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allPosts.map((post, i) => (
        <div key={i}>
          <h1 className="text-red-500">{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}

export default GetData2;

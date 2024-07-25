const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    headers: {
      "Constent-Type": "application/json",
    },
  });

  const post = await res.json();
  return post;
};

import React from "react";

async function GetData1() {
  const allPosts = await getData();
  console.log(allPosts);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {allPosts.results?.map((post, i) => (
        <div key={i}>
          <h1 className="text-red-500">{post.title}</h1>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </main>
  );
}

export default GetData1;

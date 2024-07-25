import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req) {
  console.log(req);

  //Headers
  const requestHeaders = new Headers(req.headers);
  console.log(requestHeaders);

  //URL Query Params url-> http://localhost:3000/api/products?search=%22jeans%22
  const { searchParams } = new URL(req.url);
  //or
  //   const searchParams = req.nextUrl.searchParams;
  console.log(searchParams);
  console.log(searchParams.get("search"));
  //or

  //cookies
  const cookie1 = req.cookies;
  const cookie2 = cookies();

  return NextResponse.json({ msg: "Hello Guys" });
}

export async function POST(req) {
  //   console.log(req);

  //Req Body
  //   const res = await req.json();
  //   console.log("ResJson", res);

  //form data
  const formData = await req.formData();
  console.log("From Data", formData);
  console.log("Name", formData.get("name"));
  return NextResponse.json({ msg: "Post Success" }, { status: 201 });
}

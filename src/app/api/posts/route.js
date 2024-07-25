import connectDB from "@/lib/connectDB";
import PostModels from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();
    const results = await PostModels.find();
    return NextResponse.json({ results: results }, { status: 200 });
    console.log("Results:", results);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Something went wrong..." },
      { status: 400 }
    );
  }
}

export async function POST(req) {
  const body = await req.json();
  try {
    await connectDB();
    const results = await PostModels.create(body);
    return NextResponse.json({ results: results }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { msg: "Something went wrong..." },
      { status: 400 }
    );
  }
}

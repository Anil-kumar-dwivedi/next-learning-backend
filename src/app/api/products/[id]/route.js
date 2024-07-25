import { NextResponse } from "next/server";

export const GET = async (req, context) => {
    //dynamic route values from path url -> http://localhost:3000/api/products/2
    //context -> { params: { id: '2' } }
  console.log("context:", context);
  console.log("context.params.id:", context.params.id);
  return NextResponse.json({ msg: "success" }, { status: 200 });
};

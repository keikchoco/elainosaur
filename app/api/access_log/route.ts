import { NextRequest, NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const client = await clientPromise;
  const db: any = client.db("Elainosaur");
  db.collection("access_log").insertOne({
    access_time: requestBody.access_time,
    moodClicked: requestBody.moodClicked,
    moodMessage: requestBody.moodMessage
  });
  return NextResponse.json({ message: "success" });
}

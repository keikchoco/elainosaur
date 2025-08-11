import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Elainosaur");
    const moods = await db.collection("Moods").find({}).toArray();
    return NextResponse.json(moods);
  } catch (e) {
    return NextResponse.json({ error: "Failed to fetch moods" }, { status: 500 });
  }
}
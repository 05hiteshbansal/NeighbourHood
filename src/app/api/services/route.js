import connection from "@/db/connect";
import { NextResponse } from "next/server";
import Services from "@/model/services";
import User from "@/model/UserData";

// Initialize connection to the database
connection();

export async function POST(req) {
  try {
    const data = await req.json();
    const userData=await Services.find();
    return NextResponse.json({ message: "Near Users", status: 200, success: true, users: userData });

  } catch (error) {
    // Handle any errors that occur
    console.error("Error:", error.message);
    return NextResponse.json({ message: error.message, status: 500, success: false });
  }
}

import connection from "@/db/connect";
import User from "@/model/UserData";
import { NextResponse } from "next/server";
connection();

export async function POST(req) {
  try {
    const data= await req.json();
    const y={
      ...data,
      "firsttimeuser":true
    }
    const userData=await User.create(y);
    console.log(userData);
    
    return NextResponse.json({ message: "Username created successfully", status: 400 ,success:true});
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 ,success:false});
  }
}
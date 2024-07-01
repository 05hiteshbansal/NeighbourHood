import connection from "@/db/connect";
import User from "@/model/UserData";
import Email from "next-auth/providers/email";
import { NextResponse } from "next/server";
connection();

export async function POST(req) {
  try {
    const data= await req.json();
    console.log(data.log, data.lat, "backend")
User.createIndexes({ location: "2dsphere" },  {unique: true})
    const near= await User.aggregate([
      {
        $geoNear:
      {
        near:{type:'Point' ,coordinates:[parseFloat(data.log), parseFloat(data.lat)]},
        key:'location',
        maxdistance:parseFloat(500)*1609,
        distanceField:"dist.calculated",
        spherical:true
      }
    }
  ])
    
    console.log(near)
    return NextResponse.json({ message: "near Users", status: 400 ,success:true , "users":near});
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 ,success:false});
  }
}
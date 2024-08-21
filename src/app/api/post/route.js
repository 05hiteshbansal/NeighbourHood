import connection from "@/db/connect";
import User from "@/model/UserData";
import { NextResponse } from "next/server";
import Post from "@/model/post";
import LostFound from "@/model/lostFound";
import Events from "@/model/events";
import BuySell from "@/model/sellandBuy";
import Services from "@/model/services";
connection();
export async function POST(req) {
  try {
    const data= await req.json();
    const userData=await User.findOne({email:data.email});
    console.log(data);
    const postData={
    location:userData.location,
    userid:userData._id,
    title:data.Title,
    eventImage:data.postimage,
    userImage:userData.imageurl,
    }
    postData["bio"]=data.Detail;
    postData["name"]=userData.name;

let final;
    if(data.event==="Feeds"){
        final = await Post.create(postData)
    }
    else if (data.event==="Lost & Found") {
        final = await LostFound.create(postData)
    }
    else if (data.event==="Sell & Buy") {
        final = await BuySell.create(postData)
    }
    else if (data.event==="Local events") {
        final = await Events.create(postData)
    }
     else {
        final = await Services.create(postData)
    }
    console.log(final)
    return NextResponse.json({ message: "Post Posted Successfully", status: 400 ,success:true, userData:final});
  } catch (error) {
    return NextResponse.json({ message: error.message, status: 500 ,success:false});
  }
}                   
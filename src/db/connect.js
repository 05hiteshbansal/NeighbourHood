import mongoose from "mongoose";

const connection={};

async function dbConnect(){
    if(connection.isConnected){
        console.log("already connected");
        return;
    }

    try {
        const db=await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || " " , {});
        connection.isConnected=db.connections[0].readyState

        console.log("DB is connected successfully")
    } catch (error) {
        console.log("Database connection Failed ")
    }
}

export default dbConnect
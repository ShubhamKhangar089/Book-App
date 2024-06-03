import { connect } from "mongoose";

export const connectToDB = async(url)=>{
    try {
        console.log("successfully connected to DB");
        await connect(url)
    } catch (error) {
        console.log("error while connecting to data base");
    }
}
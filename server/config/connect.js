import mongoose from 'mongoose';

const connect = async ( DATABASE_URL, DB_NAME )=>{
    try {
        console.log("Connect to MongoDB...");
        await mongoose.connect( DATABASE_URL, {
            dbName: DB_NAME
        })
        console.log("Connected to mongoDB...");
    } catch (error) {
        console.log(error.message);
    }
}

export default connect;
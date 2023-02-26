import mongoose from "mongoose";


class mongoDatabase {
    static async connect() {
        const MONGO_URL = process.env.MONGO_URL

        mongoose.connect(MONGO_URL)
            .then(() => console.log("Database connected"))
            .catch((err) => console.log(err))
    }
}

export { mongoDatabase }
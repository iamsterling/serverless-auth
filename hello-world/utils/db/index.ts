import mongoose from 'mongoose'




interface AuthParams {
    username: string,
    password: string
}



const db = {
    async connect(): Promise<boolean> {
        try {
            await mongoose.connect("mongodb://localhost:27017/mydatabase")
            console.log("mongoDB connected")
            return true
        } catch (err) {
            console.error("database connection failed", err)
            return false
            //  process.exit(1)
        }
    },
    async auth({ username, password }: AuthParams): Promise<string> {
        console.log("to do")

        return "test-jwt after connection!"
    },
    async signup() {
        console.log("to do")
    }
}
export default db
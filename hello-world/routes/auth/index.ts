import { validate } from "../../utils/validate"
import express from 'express'
import db from '../../utils/db'


const router = express.Router()

router.post("/", (req, res) => {
    const { username, password } = req.body
    let jwt
    try {
        if (validate({ username, password })) {
            db.connect()
            jwt = db.auth({ username, password })


            res.status(201).json({
                message: jwt
            })
        } else {
            res.status(401).json({
                message: "Username or password contains invalid characters"
            })
        }


        //  if (session) {
        //      res.json({ message: session })
        //  } else {
        //      res.status(401).json({
        //          message: "Not Authenticated"
        //      })
        //  }
    }
    catch (err) {
        console.error("auth error:", err)
        res.status(500).json({
            message: "Internal server unicorn"
        })
    }
})



export default router
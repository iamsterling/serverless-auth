import { validate } from "../../utils/validate"
import express from 'express'

const router = express.Router()

router.post("/", (req, res) => {
    try {
        //  ----
    } catch(err) {
        //  ----
        res.status(400).json({
            message: err
        })
    }
})
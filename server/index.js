const express = require("express");

const cors = require('cors');
const jwt = require('jsonwebtoken')
const app = express();
const port = 8000;

const admin = require("firebase-admin");

const serviceAccount = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

});
const db = admin.firestore()
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))


app.get("/", async (req, res) => {
    return res.send("hola")
})

app.post("/api/register", async (req, res) => {
    try {

        const userData = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const response = await db.collection("jobs_user").add(userData)
        res.send(req.body)
    } catch (e) {
        res.send(e)
    }
})



app.post("/api/add-job", async (req, res) => {
    try {

        const userData = {
            title: req.body.title,
            category: req.body.category,

            description: req.body.description,

        }

        const response = await db.collection("jobs_list").add(userData)
        res.send({ msg: "job added successfully" })
    } catch (e) {
        res.send(e)
    }
})


app.delete("/api/delete/:id", async (req, res) => {

    try {
        const useRef = db.collection('jobs_list').doc(req.params.id).delete()

        res.send({ msg: "successfully Deleted" })
    } catch (e) {
        res.send(e)
    }
})



app.get("/api/getalljobs", async (req, res) => {
    const jobs = []
    try {
        const ref = db.collection('jobs_list');
        const response = await ref.get()

        response.forEach(x => {
            jobs.push({ ...x.data(), id: x.id })
        })
        res.send({ jobs })
    } catch (e) {
        res.send(e)
    }
})

app.post("/api/login", async (req, res) => {
    const userList = []
    try {
        const ref = db.collection('jobs_user');
        const response = await ref.get()

        response.forEach(x => {
            userList.push(x.data())
        })
        let foundUser = userList.find(user => user.email == req.body.email && user.password == req.body.password)

        if (foundUser.email) {
            const token = jwt.sign({
                name: foundUser.name,

            }, 'mysecret_key')
            return res.status(200).json({
                "access_token": token,
                "msg": "Successfully Logged In !",
                "userName": foundUser.name
            })

        } else {
            return res.status(401).json({
                "error": "Authentication Failed !"
            })
        }





    } catch (e) {
        return res.status(401).json({
            "error": "Authentication Failed !"
        })
    }



})

app.listen(port, () => {
    console.log(`server is listening on port : http://localhost:${port}`)
})
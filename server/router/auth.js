const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
JWT_SECRET = 'vaishaliisgoingtobeagooddeveloperinfuture';
var jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');


router.post('/register', [
    body('firstname', 'Enter a valid name').isLength({ min: 3 }),
    body('lastname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter the valid email').isEmail(),
    body('password', 'Password must be of atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    const { firstname, lastname, email, gender, phone, age, password, cpassword } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        let tempArr = [];
        // console.log(errors.array());
        for (let i of errors.array()) {
            console.log("yes");
            tempArr.push(i.msg + ", ");
        }
        console.log(tempArr.toString().slice(0, -2));
        return res.status(400).json({ message: tempArr.toString().slice(0, -2), type: "danger" });
    }

    try {

        let user = await User.findOne({ email: email });

        if (user) {
            return res.status(401).json({ type: "danger", message: "Sorry a user with this email already exists" })
        }

        if (password != cpassword) {
            return res.status(401).json({ type: "danger", message: "Password and confirm password do not match" })
        }

        user = new User({
            firstname: firstname,
            lastname: lastname,
            email: email,
            gender: gender,
            phone: phone,
            age: age,
            password: password,
            // cpassword: cpassword,
        })

        await user.save();
        return res.status(200).json({ type: "success", message: "User signed in successfully" });
    }
    catch (err) {
        console.log(err)
        return res.status(501).json({ type: "danger", message: "Some internal error occured" })
    }

})


router.post('/login', [
    body('email', 'Enter the valid email').isEmail(),
    body('password', 'Password must not be blank').exists(),
], async (req, res) => {

let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let tempArr = [];
        // console.log(errors.array());
        for (let i of errors.array()) {
            console.log("yes");
            tempArr.push(i.msg + ", ");
        }
        console.log(tempArr.toString().slice(0, -2));
        return res.status(400).json({ message: tempArr.toString().slice(0, -2), type: "danger" });
    }
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ type: "danger", message: "Please Login using correct credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(401).json({ type: "danger", message: "Please Login using correct credentials" });
        }
        // return res.status(200).json({ type: "success", message: "User logged in successfully" });

        const data = {
            user: {
                id: user.id
            }
        }

        success=true;

        const authToken = jwt.sign(data, JWT_SECRET);
        res.json({success,authToken });

    }
    catch (err) {
        console.log(err)
        return res.status(501).json({ type: "danger", message: "Some internal error occured" })
    }
})


// get loggedin user details

router.get('/getuser', fetchuser, async(req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.json(user)

    }  catch (error) {
        console.log(error);
        res.status(501).json({ message: 'Internal server error' })
      }
})


module.exports = router;
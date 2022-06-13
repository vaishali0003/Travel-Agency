const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const User = require('../models/userSchema')
const bcrypt = require('bcrypt');

router.post('/register', [
    body('firstname', 'Enter a valid name').isLength({ min: 3 }),
    body('lastname', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter the valid email').isEmail(),
    body('password', 'Password must be of atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

    const { firstname, lastname, email, gender, phone, age, password, cpassword } = req.body;

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
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
            cpassword: cpassword,
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

    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ type: "danger", message: "Please Login using correct credentials" })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            console.log('if');
            return res.status(401).json({ type: "danger", message: "Please Login using correct credentials" });
        }
        console.log('else');
        return res.status(200).json({ type: "success", message: "User logged in successfully" });
    }
    catch (err) {
        console.log(err)
        return res.status(501).json({ type: "danger", message: "Some internal error occured" })
    }
})


module.exports = router;
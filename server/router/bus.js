const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Bus=require('../models/busSchema')

router.post('/bookings', async (req, res) => {
    const { book_from, book_to, bus_name,bus_time,bus_drops,bus_seats,bus_window,bus_type,bus_price,bus_recieve_date,bus_drop_date,booked_seats} = req.body;

    // res.send({book_from, book_to, bus_name,bus_time,bus_drops,bus_seats,bus_window,bus_type,bus_price,bus_recieve_date,bus_drop_date,booked_seats});

    try {
       let bus = new Bus({
        book_from:book_from,
        book_to:book_to,
        bus_name:bus_name,
        bus_time:bus_time,
        bus_drops:bus_drops,
        bus_seats:bus_seats,
        bus_window:bus_window,
        bus_type:bus_type,
        bus_price:bus_price,
        bus_recieve_date:bus_recieve_date,
        bus_drop_date:bus_drop_date,
        booked_seats:booked_seats
       })
       await bus.save();

       return res.status(200).json({ bus:bus,type: "success", message: "Bus information entered successfully" });
    }
    catch(err) {
        console.log(err)
        return res.status(200).json({ type: "danger", message: "Bus information not entered successfully" ,error:err});
    }
})

module.exports=router;
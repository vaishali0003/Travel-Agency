import { Context } from 'express-validator/src/context'
import React from 'react'
import Context from './context'

const state = (props) => {

    const host = "http://localhost:4300";

    const fetchallbuses = async () => {
        try {
            const response = await fetch(`${host}/bus/bookings`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await response.json()
            console.log(json)
        }
        catch {
            window.alert('Some internal error occured')
        }
    }


    return (
        <Context.Provider value={fetchallbuses}>
            {props.children}
        </Context.Provider>
    )
}

export default state



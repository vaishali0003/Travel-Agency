import React, { useState } from 'react';
import BusContext from './busContext'

const BusState = (props) => {

    const host = "http://localhost:4300";

    const [buses, setbuses] = useState([])
    // const [reviews, setreviews] = useState([])

    // to fetch all the buses for a given journey
    const fetchallbuses = async (from, to) => {
        // try {
        const response = await fetch(`${host}/bus/fetchallbuses/${from}/${to}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const json = await response.json()
        setbuses(json);
        // }
        // catch(error) {
        //     console.log(error);
        //     window.alert('Some internal error occured')
        // }
    }


    // to fetch all the reviews
    const fetchallreviews = async () => {
        const response = await fetch(`${host}/reviews/fetchallreviews`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            }
        })

        var data = await response.json();
        // console.log(data);
        return data;
    }


    return (
        <BusContext.Provider value={{ fetchallbuses, buses, fetchallreviews}}>
            {props.children}
        </BusContext.Provider>
    )
}

export default BusState;



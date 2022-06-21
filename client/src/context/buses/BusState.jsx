import React, { useState } from 'react';
import BusContext from './busContext'

const BusState = (props) => {

    const host = "http://localhost:4300";

    const [buses, setbuses] = useState([])

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

    return (
        <BusContext.Provider value={{ fetchallbuses,buses }}>
            {props.children}
        </BusContext.Provider>
    )
}

export default BusState;



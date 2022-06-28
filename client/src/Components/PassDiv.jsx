import React, { useState, useEffect } from 'react'

const PassDiv = (props) => {

    // MY CODE---------------

    const [pass_info, setpass_info] = useState({ pass_name: "", pass_age: "", pass_gend: "" });
    let tempObj = { pass_name: "", pass_age: "", pass_gend: "" }

    const onChange = (e) => {
        // setpass_info({...pass_info,[e.target.name]:e.target.value});
        setpass_info(() => {
            if (e.target.className === 'pass_gend') {
                return { ...pass_info, 'pass_gend': e.target.value }
            }
            else {
                return { ...pass_info, [e.target.name]: e.target.value }
            }
        })

        if (e.target.className === 'pass_gend') {
            tempObj = { ...pass_info, 'pass_gend': e.target.value };
        }
        else {
            tempObj = { ...pass_info, [e.target.name]: e.target.value }
        }
        // tempObj={...pass_info, [e.target.name]: e.target.value};
        props.setValue1(props.index, tempObj);
    }


    // useEffect(() => {
    //     const data = JSON.parse(localStorage.getItem("pass_info"));
    //     if (pass_info.pass_name === "" && pass_info.pass_age === ""){
    //         setpass_info({ ...pass_info, ...data })
    //     }
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem("pass_info", JSON.stringify(pass_info));
    // }, [pass_info.pass_name, pass_info.pass_age])

    // do it in the bboking-conf

    if(localStorage.getItem('token')){
        var item = JSON.parse(localStorage.getItem('pass_info'))[props.index];
        if(item){
            var item_name=item.pass_name; 
            var item_age=item.pass_age; 
            var item_gend=item.pass_gend; 
        }
    }
  
    return (
        <>
            <div className="pass_sec1">
                <p className="pass_num">Passenger 1</p>
                <input type="text" className="pIn" placeholder='PASSENGER NAME' name="pass_name" onChange={onChange} value={(item)?item_name:pass_info.pass_name} />
                <input type="text" className="pIn" placeholder='PASSENGER AGE' name="pass_age" onChange={onChange} value={(item)?item_age:pass_info.pass_age} />
                <div className="pass-gender" style={{ marginTop: "0.6rem" }} onChange={onChange} value={(item)?item_gend:pass_info.pass_gend}>
                    <input type="radio" name={`pass_gend${props.index}`} className='pass_gend' value="Female" />
                    <label htmlFor="female" className='label_gend'>Female</label>
                    <input type="radio" name={`pass_gend${props.index}`} className='pass_gend' value="Male"/>
                    <label htmlFor="male" className='label_gend'>Male</label>
                    <input type="radio" name={`pass_gend${props.index}`} className='pass_gend' value="Others"/>
                    <label htmlFor="other" className='label_gend'>Others</label>
                </div>
            </div>
        </>
    )
}

export default PassDiv
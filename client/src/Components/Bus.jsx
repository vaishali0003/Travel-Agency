import React,{useState} from 'react'

const Bus = (props) => {
  
const {bus}=props

  const [flag, setflag] = useState(true)

  const onClick = (props) => {

    const policies_list = document.querySelector('.policies_list');

    if (flag) {
      policies_list.style.display = 'flex';
      setflag(!flag);
    }
    else {
      policies_list.style.display = 'none';
      setflag(!flag);
    }
  }

let start_time=bus.bus_time;
let end_time=bus.bus_drops;

// const getTimeZone(time)=>{
// const timeInfo=time.sptli
// }


const getTimeZone=(time)=>{
const timeInfo=time.split(':')
console.log(timeInfo)
}

let time='8:00'
getTimeZone(time);

let startTimezone=(start_time >'12:00')?'pm':'am'
let endTimezone=(end_time >'12:00')?'pm':'am'

  return (
    <>
      <div className="busBox">
        <div className="busBox1 col-md-10">
          <h3 className="bus_name">{bus.bus_name}</h3>
          <ul className="bus_info1">
            <li className="bus_info1_item">{bus.bus_type}</li>
            <li className="bus_info1_item">{bus.bus_seats} seats</li>
            <li className="bus_info1_item">{bus.bus_window} window seats</li>
          </ul>
          <hr />
          <ul className="bus_info2">
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>{bus.bus_time+startTimezone}, </span><span style={{ color: "grey" }}>{bus.bus_recieve_date}</span></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>3</span><sub style={{ color: "grey" }}>hrs</sub>0<sub style={{ color: "grey" }}>min</sub></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>{bus.bus_drops+endTimezone},</span><span style={{ color: "grey" }}>{bus.bus_drop_date}</span></li>
          </ul>
          <hr />
          <div className="policies">
            <p className="poli_head" onClick={onClick}>Policies</p>

            <ul className="policies_list">

              <li className="policy">
                <p className="policy_head"> CANCELLATION</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head"> CHILD PASSENGER</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">LUGGUAGE</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">PETS</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">LIQUOR</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

              <li className="policy">
                <p className="policy_head">PICKUP TIME</p>
                <ul className="policy_list">
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                  <li className="policy_list_item">Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
              </li>

            </ul>
          </div>
        </div>
        <div className="busBox2 col-md-2">
          <p className="bus_info2_i" style={{ color: 'grey' }}>Starting From</p>
          <h2 className="bus_box2_price" style={{ fontWeight: "bold" }}>
            $199
          </h2>
          <button className="select_seats">SELECT SEATS</button>
        </div>
      </div>
    </>
  )
}

export default Bus
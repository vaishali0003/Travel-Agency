import React,{useState} from 'react'

const Bus = () => {
  
  const [flag, setflag] = useState(true)

  const onClick = () => {

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


  return (
    <>
      <div className="busBox">
        <div className="busBox1 col-md-10">
          <h3 className="bus_name">Bus 21</h3>
          <ul className="bus_info1">
            <li className="bus_info1_item">Sleeper Non/AC</li>
            <li className="bus_info1_item">20 seats</li>
            <li className="bus_info1_item">15 windows</li>
          </ul>
          <hr />
          <ul className="bus_info2">
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>8:00 , </span><span style={{ color: "grey" }}>15 NOV</span></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>3</span><sub style={{ color: "grey" }}>hrs</sub>0<sub style={{ color: "grey" }}>min</sub></li>
            <li className="bus_info2_item"><span style={{ fontWeight: "bold" }}>11:00,</span><span style={{ color: "grey" }}>15 NOV</span></li>
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
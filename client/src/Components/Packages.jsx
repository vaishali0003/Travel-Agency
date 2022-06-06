import React from 'react'
import Package from './Package'

const Packages = () => {
    return (
        <>
            <div className="packagesSection">
                <h1 className="head">Our Packages</h1>
                <div className="col-md-10">
                   <div className="packages row">
                      <Package img={'../images/pac_p1.jpg'} cardTag='Mumbai' disPrice='450' oPrice='900'/>
                      <Package img={'../images/pac_p2.jpg'} cardTag='Delhi' disPrice='200' oPrice='600'/>
                      <Package img={'../images/pac_p3.jpg'} cardTag='Jaipur' disPrice='700' oPrice='900'/>
                      <Package img={'../images/pac_p4.jpg'} cardTag='Udaipur' disPrice='1050' oPrice='1400'/>
                      <Package img={'../images/pac_p5.jpg'} cardTag='Ayodhya' disPrice='450' oPrice='800'/>
                      <Package img={'../images/pac_p6.jpg'} cardTag='Surat' disPrice='740' oPrice='1000'/>
                   </div>
                </div>
            </div>
        </>
    )
}

export default Packages
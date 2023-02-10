
import React from 'react'

import {} from "@coreui/react"
import FreelancerDetailHeader from "./FreelancerDetailHeader";
import FreelancerDetailList from "./FreelancerDetailList";
import { useLocation } from 'react-router-dom';

const FreelancerMain = (props) => {
    const location = useLocation();
    const memberid = location.state.memberid;
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);
    
    return (
        <div>
           
            <FreelancerDetailHeader memberid={memberid} loginInfo={loginInfo}/>

            <FreelancerDetailList memberid={memberid} loginInfo={loginInfo}/>

        </div> 
      
    );

};

export default FreelancerMain;

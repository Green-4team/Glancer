
import React from 'react'

import {} from "@coreui/react"
import FreelancerHeader from "./FreelancerHeader";
import FreelancerList from "./FreelancerList";
import { useLocation } from 'react-router-dom';





const FreelancerMain = (props) => {
    
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);

    return (
        <div>

            <FreelancerHeader loginInfo={loginInfo} />

            <FreelancerList loginInfo={loginInfo}/>

        </div> 
      
    );

};

export default FreelancerMain;

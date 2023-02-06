
import React from 'react'

import {} from "@coreui/react"
import FreelancerHeader from "./FreelancerHeader";
import FreelancerList from "./FreelancerList";





const FreelancerMain = ({loginInfo}) => {
    
    return (
        <div>

            <FreelancerHeader loginInfo={loginInfo} />

            <FreelancerList />

        </div> 
      
    );

};

export default FreelancerMain;

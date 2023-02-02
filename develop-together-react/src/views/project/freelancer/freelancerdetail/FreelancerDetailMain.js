
import React from 'react'

import {} from "@coreui/react"
import FreelancerDetailHeader from "./FreelancerDetailHeader";
import FreelancerDetailList from "./FreelancerDetailList";
import { useLocation } from 'react-router-dom';





const FreelancerMain = (props) => {
    const location = useLocation();
    const memberid = location.state.memberid;
    
    return (
        <div>
           
            {/* <FreelancerDetailHeader memberid={memberid}/> */}

            {/* <FreelancerDetailList memberid={memberid} /> */}

        </div> 
      
    );

};

export default FreelancerMain;

import { useLocation } from "react-router-dom";
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage, CCardTitle, CCardHeader,CBadge, CCol, CRow, CContainer, CButton } from "@coreui/react"
import FreelancerHeader from "./FreelancerHeader";
import FreelancerList from "./FreelancerList";





const FreelancerMain = (props) => {
    
    return (
        <div>
            <FreelancerHeader />

            <FreelancerList />

        </div> 
      
    );

};

export default FreelancerMain;

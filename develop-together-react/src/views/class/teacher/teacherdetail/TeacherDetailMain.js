
import React from 'react'

import {} from "@coreui/react"
import TeacherDetailHeader from './TeacherDetailHeader';
import { useLocation } from 'react-router-dom';




const TeacherDetailMain = (props) => {
    const location = useLocation();
    const memberid = location.state.memberid;

    return (
        <div>
           
            <TeacherDetailHeader memberid={memberid}/>

        </div> 
      
    );

};

export default TeacherDetailMain;

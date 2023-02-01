
import React from 'react'

import {} from "@coreui/react"
import ClassDetailHeader from "./ClassDetailHeader";
import ClassDetailList from "./ClassDetailList";
import { useLocation } from 'react-router-dom';







const ClassDetailMain = (props) => {
    const location = useLocation();
    const classno = location.state.classno;

    return (
        <div>
           
            <ClassDetailHeader classno={classno} />

        </div> 
      
    );

};

export default ClassDetailMain;

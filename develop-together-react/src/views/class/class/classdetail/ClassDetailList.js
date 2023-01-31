
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody, CCol,CBadge,CImage, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane  } from "@coreui/react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';
import ClassDetailItem from './ClassDetailItem';


function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
    }
    return arr
}


const ClassDetailList = (props) => {

    const [results, setResults] = useState(null);

    useEffect(() => {
      const loadClassDetail = async (e) => {
          const url = `http://127.0.0.1:8081/class/class/classdetail`;
          const response = await axios.get(url);
          setResults(response.data.results);
      };
      loadClassDetail();
    }, [])

    if (!results) {
      return;
    }

    
    return (
      <CCol xs={10} style={{margin: "auto"}}>
        <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
        <CCardHeader style={{height:'45px'}}>
        <CNav style={{paddingLeft:0 , marginTop:-5}} variant="tabs" role="tablist">
          <CNavItem >
            <CNavLink style={{height:'42px'}}
              
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>강의 정보</span>
            </CNavLink>
          </CNavItem>
        </CNav>
        </CCardHeader>
        <CCardBody>
          강의 세부 정보
        </CCardBody>
        </CCard>
      </CCol>
      
    );

};

export default ClassDetailList;


import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody, CCol,CBadge,CImage, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane  } from "@coreui/react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useEffect, useState } from "react";

const DramaMainMediaBlock = styled.div`


  margin-left: -15px;
  margin-right: -15px;
 
 
`;


function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
    }
    return arr
}

function project(){
    var arr = [];
    for (var i = 0; i < 5; i++) {
    arr.push(<CCol xs={12} >
                <CCard textColor='dark' style={{margin:5}}>
                    <CCardBody style={{ marginLeft:'0px'}}>
                    <strong>개발, PL</strong> <br></br>
                    <h4>프로젝트명 </h4>
                    <strong style={{ marginBottom:"10px"}}>프로젝트 기간 </strong> <br></br> 
                    <strong style={{ marginBottom:"10px"}}>프로젝트 내용, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용,ㅍ, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용,  </strong> <br></br>
                        { aa() }                                       
                    </CCardBody>
                </CCard>
            </CCol>)
    }
    return arr
}




const TeacherRegisterList = (props) => {

    const [activeKey, setActiveKey] = useState(1)

    
    return (
        <CCol xs={10} style={{margin: "auto"}}>
    <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
      <CCardHeader style={{height:'45px'}}>
        <CNav style={{paddingLeft:0 , marginTop:-5}} variant="tabs" role="tablist">
          <CNavItem >
            <CNavLink style={{height:'42px'}}
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>강사 정보</span>
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

export default TeacherRegisterList;

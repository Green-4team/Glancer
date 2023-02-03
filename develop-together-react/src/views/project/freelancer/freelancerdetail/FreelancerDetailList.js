
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody, CCol,CBadge,CImage, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane  } from "@coreui/react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';

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






const FreelancerDetailList = (props) => {

  function project(){
    var arr = [];
    for (var i = 0; i < 5; i++) {
    arr.push(<CCol xs={12} >
                <CCard textColor='dark' style={{margin:5}}>
                    <CCardBody style={{ marginLeft:'0px'}}>
                    <strong>개발, PL</strong> <br></br>
                    <h4>{results.name} </h4>
                    <strong style={{ marginBottom:"10px"}}>프로젝트 기간 </strong> <br></br> 
                    <strong style={{ marginBottom:"10px"}}>프로젝트 내용, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용,ㅍ, 프로젝트 내용, 프로젝트 내용, 프로젝트 내용,  </strong> <br></br>
                        { aa() }                                       
                    </CCardBody>
                </CCard>
            </CCol>)
    }
    return arr
}


    const [activeKey, setActiveKey] = useState(1)
    const [results, setResults] = useState(null);

    useEffect(() => {
      const loadFreelancerDetailList = async (e) => {
        const response = await axios.get(`http://127.0.0.1:8081/project/freelancerDetailList`)
        setResults(response.data.results)
      }
      loadFreelancerDetailList();
    })

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
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>프로젝트</span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{height:'42px'}}
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <span style={{fontSize:18, fontWeight:"bold", color:"#696969"}} >이력서</span>
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CTabContent>
          <CTabPane role="동영상탭" aria-labelledby="" visible={activeKey === 1}>
            <CCol xs={15}>
              <CCardBody>
                <DramaMainMediaBlock style={{ marginTop:-15, marginBottom:-15}}>
                    { project() }
                </DramaMainMediaBlock>
              </CCardBody>
            </CCol>
          </CTabPane>
          <CTabPane role="배경" aria-labelledby="" visible={activeKey === 2}>
            <CCol xs={15}>
              <CCardBody>
                <DramaMainMediaBlock style={{ marginTop:-15, marginBottom:-15}}>
                    <div>이력서 내용</div>
                    
                </DramaMainMediaBlock>
              </CCardBody>
            </CCol>
          </CTabPane> 
        </CTabContent>
      </CCardBody>
    </CCard>
  </CCol>
      
    );

};

export default FreelancerDetailList;

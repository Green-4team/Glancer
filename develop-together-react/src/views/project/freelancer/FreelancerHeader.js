
import React, { useEffect, useState } from 'react'

import { CCard, CCardBody, CCol, CRow, CContainer, CButton } from "@coreui/react"
import { Link, useLocation, useNavigate } from 'react-router-dom';

const FreelancerHeader = ({memberid }) => {
 
    const [results, setResults] = useState(null);
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);
    
   
    return (
        <div>
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                    <CCol xs={{ span: 12 }}>
                                        <div className="p-1"><strong>이랜서가 보증하는 IT 파트너스 39만명</strong></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 6 }}>
                                        <div className="p-1"> <h2>프로젝트를 등록하면</h2></div>
                                    </CCol>
                                    <CCol xs={{ span: 3 }}>
                                    {loginInfo === null ?    
                                    <div><Link to="/project/freelancer/FreelancerProfileRegist" state={{memberid}} style={{textDecoration: "none", color: "black"}}>   
                                    <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로필 등록하기</CButton></div>
                                    </Link></div>
                                    :
                                    <div><Link to="/project/freelancer/FreelancerProfileRegist" state={{ memberid}} style={{textDecoration: "none", color: "black"}}>   
                                    <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로필 수정하기</CButton></div>
                                    </Link></div>

                                    }
                                    

{/* 
                                        {loginInfo.memberId === memberid ? 
                                        <Link to="/project/freelancer/ProjectRegist" state={{ }} style={{textDecoration: "none", color: "black"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 수정하기</CButton></div>
                                        </Link> : <div><Link to="/project/freelancer/ProjectRegist" state={{ }} style={{textDecoration: "none", color: "black"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기</CButton></div>
                                        </Link></div>}
 */}





                                    </CCol> 
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"-10px", fontWeight:"bold"}}><h2>더 정확한 추천을 받을 수 있어요</h2></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }} style={{marginRight:"-15px"}}>
                                       <div className="p-1"><CButton  color="warning" shape="rounded-pill">개발자</CButton></div>
                                    </CCol>
                                    
                                    <CCol xs={{ span: 2 }}>
                                       <div className="p-1"><CButton color="warning" shape="rounded-pill">퍼블리셔</CButton></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }}>
                                       <div className="p-1"><CButton color="warning" shape="rounded-pill">디자이너</CButton></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }}>
                                       <div className="p-1"><CButton color="warning" shape="rounded-pill">기획자</CButton></div>
                                    </CCol>
                                   
                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
           
        </div> 
      
    );

};

export default FreelancerHeader;

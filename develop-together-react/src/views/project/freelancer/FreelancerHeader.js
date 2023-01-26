import { useLocation } from "react-router-dom";
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage, CCardTitle, CCardHeader,CBadge, CCol, CRow, CContainer, CButton } from "@coreui/react"

const FreelancerHeader = (props) => {
    
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
                                    <CCol xs={{ span: 7 }}>
                                        <div className="p-1"> <h1>프로젝트를 등록하면</h1></div>
                                    </CCol>
                                    <CCol xs={{ span: 5 }}>
                                       <div className="p-1" style={{marginLeft:"85px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기</CButton></div>
                                    </CCol>                                  
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"-10px", fontWeight:"bold"}}><h1>더 정확한 추천을 받을 수 있어요</h1></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }}>
                                       <div className="p-1"><CButton color="warning" shape="rounded-pill">개발자</CButton></div>
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

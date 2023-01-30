
import React from 'react'
import { CCard, CCardBody, CCol, CRow, CContainer, CButton } from "@coreui/react"
import { Link } from 'react-router-dom';

const TeacherHeader = (props) => {
    
    return (
        <div>
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                    <CCol xs={{ span: 12 }}>
                                        <div className="p-1"><strong>Glancer가 보증하는 강사진!</strong></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 0 }}>
                                        <div className="p-1" > <h2>나에게 맞는 강사를 찾아주세요.</h2> <br></br>
                                        <Link to="/class/teacher/teacherregister">
                                            <CButton color="primary" shape="rounded-pill" size="lg">강사 등록</CButton>
                                        </Link>
                                        </div>
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

export default TeacherHeader;


import React from 'react'

import { CCard, CCardBody, CCol, CRow, CContainer, CButton } from "@coreui/react"

const ClassHeader = (props) => {
    
    return (
        <div>
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                    <CCol xs={{ span: 12 }}>
                                        <div className="p-1"><strong>Glancer가 보증하는 강의!</strong></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 0 }}>
                                        <div className="p-1"> <h2>원하는 고수의 강의를 찾아주세요.</h2></div>
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

export default ClassHeader;

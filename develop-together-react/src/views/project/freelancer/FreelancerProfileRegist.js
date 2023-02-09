
import React, { useEffect, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,

  CFormInput,

  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'

const FreelancerProfileRegist = (props) => {

  let loginInfo = window.sessionStorage.getItem("loginInfo");
  loginInfo = JSON.parse(loginInfo);
  const location = useLocation();


  const navigate = useNavigate();
  useEffect( () => {
    if (loginInfo === null || loginInfo === '' ) {
      alert('로그인을 해주세요');
      navigate('/login');   
    }
  })

const [freelancerProfileRegist, setFreelancerProfileRegist] = useState({

});

const insertFreelancerProfileRegist = () => {
  axios.post(`http://127.0.0.1:8081/project/freelancerProfileRegister?memberid=${loginInfo.memberId}`, 
              freelancerProfileRegist,
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
      .then( response => {
        alert('프로필 등록 완료');
        navigate('/project/freelancer');
      })
      .catch( e => {          
        alert('error');
      });
};
  

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow className="justify-content-center">
        <CCol md={12} lg={7} xl={8}>
          <CCard className="mx-2" style={{zIndex: 0}}>
            <CCardBody className="p-4">
              <CForm>
                <h1>프리랜서 프로필 등록</h1>
                <br></br><br></br>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >직종</CFormLabel>
                  <CCol sm={3}>
                  <CFormSelect size="sm" value={freelancerProfileRegist.occupation} onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "occupation": e.target.value})}}>
                    <option>직종 선택</option>
                    <option autoComplete="개발자">개발자</option>
                    <option autoComplete="퍼블리셔">퍼블리셔</option>
                    <option autoComplete="디자이너">디자이너</option>
                    <option autoComplete="기획자">기획자</option>
                  </CFormSelect>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >소개글</CFormLabel>
                  <CCol sm={10}>
                    <CFormInput placeholder="간단한 소개글을 적어주세요." 
                                value={freelancerProfileRegist.title}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "title": e.target.value})}}/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >경력</CFormLabel>
                  <CCol sm={2}>
                    <CFormInput placeholder="ex) 5"
                                value={freelancerProfileRegist.careeryear}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "careeryear": e.target.value})}}/>
                  </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >활용프로그램</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.program1}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "program1": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.program2}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "program2": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.program3}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "program3": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.program4}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "program4": e.target.value})}}/>
                    </CCol>                             
                </CRow>

                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >활용언어</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.language1}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "language1": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.language2}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "language2": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.language3}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "language3": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.language4}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "language4": e.target.value})}}/>
                    </CCol>                             
                </CRow>
                <hr></hr>
                <div style={{ color:"gray", fontSize:"15px"}}>0~100 사이의 숫자로 본인을 평가해 주세요.</div><br></br>

                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >전문성</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder="ex) 90"
                                value={freelancerProfileRegist.value1}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "value1": e.target.value})}}/>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >일정준수</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder="ex) 90"
                                value={freelancerProfileRegist.value2}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "value2": e.target.value})}}/>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >적극성</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder="ex) 90"
                                value={freelancerProfileRegist.value3}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "value3": e.target.value})}}/>
                    </CCol>
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >의사소통</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder="ex) 90"
                                value={freelancerProfileRegist.value4}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "value4": e.target.value})}}/>
                    </CCol>
                </CRow>
                {/* <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >memberid</CFormLabel>
                    <CCol sm={2}>
                    <CFormInput placeholder=""
                                value={freelancerProfileRegist.memberid}
                                onChange={(e) => {setFreelancerProfileRegist({...freelancerProfileRegist, "memberid": e.target.value})}}/>
                    </CCol>
                </CRow> */}


                <br></br><br></br> 
                <div className="col-4 mx-auto">
                <CButton type='submit' color="dark" size="lg" 
                onClick={
                  (e) => {                         
                    insertFreelancerProfileRegist(freelancerProfileRegist); 
                    // setAcademyInfo({});
                    e.preventDefault();
                } 
                }
                >이력서를 등록하세요!!</CButton> 
                </div>          
               </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
  )
}

export default FreelancerProfileRegist




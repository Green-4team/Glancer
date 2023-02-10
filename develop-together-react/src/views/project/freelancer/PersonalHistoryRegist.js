
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
  CFormTextarea,
  CRow,
} from '@coreui/react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const PersonalHistoryRegist = (props) => {


let loginInfo = window.sessionStorage.getItem("loginInfo");
loginInfo = JSON.parse(loginInfo);

const navigate = useNavigate();
useEffect( () => {
  if (loginInfo === null || loginInfo === '' ) {
    alert('로그인을 해주세요');
    navigate('/login');   
  }
})


const [personalHistoryRegist, setPersonalHistoryRegist] = useState({
  memberid:loginInfo.memberId,
});



const insertPersonalHistoryRegist = () => {
  axios.post("http://127.0.0.1:8081/project/personalHistoryRegister", 
              personalHistoryRegist,
            { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
      .then( response => {
        alert('이력서 등록 완료');
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
                <h1>이력서 등록</h1>
                <h3>근무경력</h3>
                                  
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >회사명</CFormLabel>
                  <CCol sm={4}>
                    <CFormInput placeholder="회사명" 
                                value={personalHistoryRegist.company}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "company": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="부서" 
                                value={personalHistoryRegist.depart}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "depart": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="직급" 
                                value={personalHistoryRegist.position}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "position": e.target.value})}}/>
                  </CCol>
                </CRow>
               
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >근무년월</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2021-05-01"
                                value={personalHistoryRegist.startdate}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "startdate": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2022-04-30" 
                                 value={personalHistoryRegist.enddate}
                                 onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "enddate": e.target.value})}}/>
                  </CCol>
                </CRow>
                <hr></hr>
                <h3>학력사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >학교명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="학교명"
                                value={personalHistoryRegist.schoolname}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "schoolname": e.target.value})}}/>
                  </CCol>
                  <CCol sm={2}>
                    <CFormInput placeholder="ex)4년제"
                                value={personalHistoryRegist.schoolyeartype}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "schoolyeartype": e.target.value})}}/>
                  </CCol>                
                </CRow>

                
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >재학기간</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2021-05-01"
                                value={personalHistoryRegist.schoolstart}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "schoolstart": e.target.value})}}/>
                  </CCol>
                  ~
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2022-04-30" 
                                 value={personalHistoryRegist.schoolend}
                                 onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "schoolend": e.target.value})}}/>
                  </CCol>
                  <CCol sm={2}>
                    <CFormInput placeholder="ex) 졸업" 
                                 value={personalHistoryRegist.schooltype}
                                 onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "schooltype": e.target.value})}}/>
                  </CCol>
                </CRow>
                <hr></hr>
                <h3>교육사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >학교명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="교육명"
                                value={personalHistoryRegist.eduname}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "eduname": e.target.value})}}/>
                    </CCol>
                    <CCol sm={4}>
                    <CFormInput placeholder="교육기관"
                                value={personalHistoryRegist.edudepart}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "edudepart": e.target.value})}}/>
                    </CCol>                
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >교육기간</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryRegist.edustart}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "edustart": e.target.value})}}/>
                  </CCol>
                  ~
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-09-05" 
                                 value={personalHistoryRegist.eduend}
                                 onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "eduend": e.target.value})}}/>
                  </CCol>                 
                </CRow>
                <hr></hr>
                <h3>자격사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >자격증명명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="자격증명"
                                value={personalHistoryRegist.certiname}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "certiname": e.target.value})}}/>
                  </CCol>
                  <CCol sm={4}>
                    <CFormInput placeholder="발행처"
                                value={personalHistoryRegist.certipublisher}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "certipublisher": e.target.value})}}/>
                  </CCol>                
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >취득년월</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryRegist.certidate}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "certidate": e.target.value})}}/>
                  </CCol>               
                </CRow>
                {/* <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >memberid</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryRegist.memberid}
                                onChange={(e) => {setPersonalHistoryRegist({...personalHistoryRegist, "memberid": e.target.value})}}/>
                  </CCol>               
                </CRow>
                 */}
                  
                <br></br><br></br> 
                <div className="col-4 mx-auto">
                <CButton type='submit' color="dark" size="lg" 
                onClick={
                  (e) => {                         
                    insertPersonalHistoryRegist(personalHistoryRegist); 
                    // setAcademyInfo({});
                    e.preventDefault();
                } 
                }
                >등록 하기</CButton> 
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

export default PersonalHistoryRegist




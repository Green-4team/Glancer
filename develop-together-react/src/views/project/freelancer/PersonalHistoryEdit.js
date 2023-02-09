
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
import { useLocation, useNavigate } from 'react-router'
import { useLocaleContext } from 'react-native-web'

const PersonalHistoryEdit = ({loginInfo}) => {

const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const navigate = useNavigate();
const location = useLocation();
const results2 = location.state.results2



const [personalHistoryEdit, setPersonalHistoryEdit] = useState({
  careerno: results2.careerno,
  company: results2.company,
  depart: results2.depart,
  position: results2.position,
  startdate : results2.startdate,
  enddate: results2.enddate,
  memberid: results2.memberid,
  schoolname: results2.schoolname,
  schoolstart: results2.schoolstart,
  schoolend: results2.schoolend,
  schoolmajor: results2.schoolmajor,
  schoolyeartype: results2.schoolyeartype,
  schooltype: results2.schooltype,
  eduname: results2.eduname,
  edudepart: results2.edudepart,
  edustart: results2.edustart,
  eduend: results2.eduend,
  certiname: results2.certiname,
  certidate: results2.certidate,
  certipublisher: results2.certipublisher
});

const editPersonalHistory = () => {
  axios.post("http://127.0.0.1:8081/project/editPersonalHistory", 
      personalHistoryEdit,
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
                <h1>이력서 수정</h1>
                <h3>근무경력</h3>
                                  
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >회사명</CFormLabel>
                  <CCol sm={4}>
                    <CFormInput placeholder="ddddddddd"
                                value={personalHistoryEdit.company}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "company": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="부서" 
                                value={personalHistoryEdit.depart}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "depart": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="직급" 
                                value={personalHistoryEdit.position}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "position": e.target.value})}}/>
                  </CCol>
                </CRow>
               
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >근무년월</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2021-05-01"
                                value={personalHistoryEdit.startdate}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "startdate": e.target.value})}}/>
                  </CCol>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2022-04-30" 
                                 value={personalHistoryEdit.enddate}
                                 onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "enddate": e.target.value})}}/>
                  </CCol>
                </CRow>
                <hr></hr>
                <h3>학력사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >학교명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="학교명"
                                value={personalHistoryEdit.schoolname}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "schoolname": e.target.value})}}/>
                  </CCol>
                  <CCol sm={2}>
                    <CFormInput placeholder="ex)4년제"
                                value={personalHistoryEdit.schoolyeartype}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "schoolyeartype": e.target.value})}}/>
                  </CCol>                
                </CRow>

                
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >재학기간</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2021-05-01"
                                value={personalHistoryEdit.schoolstart}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "schoolstart": e.target.value})}}/>
                  </CCol>
                  ~
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2022-04-30" 
                                 value={personalHistoryEdit.schoolend}
                                 onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "schoolend": e.target.value})}}/>
                  </CCol>
                  <CCol sm={2}>
                    <CFormInput placeholder="ex) 졸업" 
                                 value={personalHistoryEdit.schooltype}
                                 onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "schooltype": e.target.value})}}/>
                  </CCol>
                </CRow>
                <hr></hr>
                <h3>교육사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >학교명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="교육명"
                                value={personalHistoryEdit.eduname}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "eduname": e.target.value})}}/>
                    </CCol>
                    <CCol sm={4}>
                    <CFormInput placeholder="교육기관"
                                value={personalHistoryEdit.edudepart}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "edudepart": e.target.value})}}/>
                    </CCol>                
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >교육기간</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryEdit.edustart}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "edustart": e.target.value})}}/>
                  </CCol>
                  ~
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-09-05" 
                                 value={personalHistoryEdit.eduend}
                                 onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "eduend": e.target.value})}}/>
                  </CCol>                 
                </CRow>
                <hr></hr>
                <h3>자격사항</h3>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >자격증명명</CFormLabel>
                    <CCol sm={4}>
                    <CFormInput placeholder="자격증명"
                                value={personalHistoryEdit.certiname}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "certiname": e.target.value})}}/>
                  </CCol>
                  <CCol sm={4}>
                    <CFormInput placeholder="발행처"
                                value={personalHistoryEdit.certipublisher}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "certipublisher": e.target.value})}}/>
                  </CCol>                
                </CRow>
                <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >취득년월</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryEdit.certidate}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "certidate": e.target.value})}}/>
                  </CCol>               
                </CRow>
                {/* <CRow className="mb-3">
                  <CFormLabel className="col-sm-2 col-form-label" >memberid</CFormLabel>
                  <CCol sm={3}>
                    <CFormInput placeholder="ex) 2016-03-05"
                                value={personalHistoryEdit.memberid}
                                onChange={(e) => {setPersonalHistoryEdit({...personalHistoryEdit, "memberid": e.target.value})}}/>
                  </CCol>               
                </CRow> */}
                
                  
                <br></br><br></br> 
                <div className="col-4 mx-auto">
                <CButton type='submit' color="dark" size="lg" 
                onClick={
                  (e) => {                         
                    editPersonalHistory(personalHistoryEdit); 
                    // setAcademyInfo({});
                    e.preventDefault();
                } 
                }
                >이력서를 수정하세요!!</CButton> 
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

export default PersonalHistoryEdit





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

const ProjectHistoryRegist = (props) => {

let loginInfo = window.sessionStorage.getItem("loginInfo");
loginInfo = JSON.parse(loginInfo);

const navigate = useNavigate();
  useEffect( () => {
    if (loginInfo === null || loginInfo === '' ) {
      alert('로그인을 해주세요');
      navigate('/login');   
    }
  })
const memberid = loginInfo.memberId;
const [projectRegist, setProjectRegist] = useState({
  // projectno: '',
  // projectname: '',
  // projectstart: '',
  // projectend: '',
  // client: '',
  // company: '',
  // position: '',
  // device: '',
  // os:'',
  // language:'',
  // dbms:'',
  // tool:'',
  // work:'',
  // memberid:loginInfo.memberId,


});


const insertProjectHistoryRegist = () => {

          axios.post(`http://127.0.0.1:8081/project/projectRegister?memberid=${memberid}`, 
                      projectRegist,
                    { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
              .then( response => {
                alert('프로젝트 등록 완료');
                navigate('/project/freelancer');
              })
              .catch( e => {          
                alert('error');
              });
        };
console.log(memberid)
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={12} lg={7} xl={8}>
            <CCard className="mx-2" style={{zIndex: 0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>프로젝트 등록</h1>
                  <p className="text-medium-emphasis">Regist your projects</p>
                                    
                  {/* <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >멤버아이디</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder="memberid를 입력해주세요" 
                                  value={projectRegist.memberid}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "memberid": e.target.value})}}/>
                    </CCol>
                  </CRow> */}
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >프로젝트 명</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder="프로젝트명을 입력해 주세요." 
                                  value={projectRegist.projectname}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "projectname": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >기간</CFormLabel>
                    <CCol sm={5}>
                      <CFormInput placeholder="ex) 2021-05-01"
                                  value={projectRegist.projectstart}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "projectstart": e.target.value})}}/>
                    </CCol>
                    <CCol sm={5}>
                      <CFormInput placeholder="ex) 2022-04-30" 
                                   value={projectRegist.projectend}
                                   onChange={(e) => {setProjectRegist({...projectRegist, "projectend": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >고객사</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder="고객사를 입력해 주세요."
                                  value={projectRegist.client}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "client": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >근무사</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder="근무사를 입력해 주세요."
                                  value={projectRegist.company}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "company": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >직종</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder="ex) 개발, 운영, 기획 etc..." 
                                  value={projectRegist.position}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "position": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >개발환경</CFormLabel>
                    
                    <CCol sm={2}>
                      <CFormInput placeholder="언어"
                                  value={projectRegist.language}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "language": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                      <CFormInput placeholder="DBMS" 
                                  value={projectRegist.dbms}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "dbms": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                      <CFormInput placeholder="TOOL" 
                                  value={projectRegist.tool}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "tool": e.target.value})}}/>
                    </CCol>
                   
                   
                    <CCol sm={2}>
                      <CFormInput placeholder="전송"
                                  value={projectRegist.datatransmission}
                                  onChange={(e) => {setProjectRegist({...projectRegist, "datatransmission": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  
                    <CFormLabel className="col-sm-2 col-form-label" >담당업무</CFormLabel>
                    <CFormTextarea 
                      value={projectRegist.work}
                      onChange={(e) => {setProjectRegist({...projectRegist, "work": e.target.value})}}
                      rows={3}
                      text="담당업무를 상세하게 적어주시면 프로젝트 추천 시 도움이 됩니다."
                ></CFormTextarea>
                                   
                  <br></br><br></br> 
                  <div className="col-4 mx-auto">
                  <CButton type='submit' color="dark" size="lg" 
                  onClick={
                    (e) => {                         
                      insertProjectHistoryRegist(projectRegist); 
                      // setAcademyInfo({});
                      e.preventDefault();
                  } 
                  }
                  >Regist your project!!</CButton> 
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

export default ProjectHistoryRegist




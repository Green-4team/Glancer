
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

const ProjectHistoryEdit = ({props}) => {
const navigate = useNavigate();


const location = useLocation();
const result = location.state.result;   


const [projectEdit, setProjectEdit] = useState({
  projecthistoryno: result.projecthistoryno,
  projectname: result.projectname,
  projectstart: result.projectstart,
  projectend: result.projectend,
  client: result.client,
  company: result.company,
  position: result.position,
  device: result.device,
  os: result.os,
  language: result.language,
  dbms: result.dbms,
  tool: result.tool,
  work: result.work,
  memberid: result.memberid,
});

console.log(result)

const editProject = () => {
    axios.post("http://127.0.0.1:8081/project/editProject", 
                projectEdit,
              { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
        .then( response => {
          alert('프로젝트 수정 완료');
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
                  <h1>프로젝트 수정</h1>
                  <p className="text-medium-emphasis">Edit your projects</p>
                                    
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
                      <CFormInput placeholder={result.projectname}
                                  value={projectEdit.projectname}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "projectname": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >기간</CFormLabel>
                    <CCol sm={5}>
                      <CFormInput placeholder={result.projectstart}
                                  value={projectEdit.projectstart}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "projectstart": e.target.value})}}/>
                    </CCol>
                    <CCol sm={5}>
                      <CFormInput placeholder={result.projectend}
                                   value={projectEdit.projectend}
                                   onChange={(e) => {setProjectEdit({...projectEdit, "projectend": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >고객사</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder={result.client}
                                  value={projectEdit.client}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "client": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >근무사</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder={result.company}
                                  value={projectEdit.company}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "company": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >직종</CFormLabel>
                    <CCol sm={10}>
                      <CFormInput placeholder={result.position}
                                  value={projectEdit.position}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "position": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  <CRow className="mb-3">
                    <CFormLabel className="col-sm-2 col-form-label" >개발환경</CFormLabel>
                    
                    <CCol sm={2}>
                      <CFormInput placeholder={result.language}
                                  value={projectEdit.language}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "language": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                      <CFormInput placeholder={result.dbms}
                                  value={projectEdit.dbms}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "dbms": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                      <CFormInput placeholder={result.tool}
                                  value={projectEdit.tool}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "tool": e.target.value})}}/>
                    </CCol>
                    <CCol sm={2}>
                      <CFormInput placeholder={result.datatransmission}
                                  value={projectEdit.datatransmission}
                                  onChange={(e) => {setProjectEdit({...projectEdit, "datatransmission": e.target.value})}}/>
                    </CCol>
                  </CRow>
                  
                    <CFormLabel className="col-sm-2 col-form-label" >담당업무</CFormLabel>
                    <CFormTextarea 
                      placeholder={result.work}
                      value={projectEdit.work}
                      onChange={(e) => {setProjectEdit({...projectEdit, "work": e.target.value})}}
                      rows={3}
                      text="담당업무를 상세하게 적어주시면 프로젝트 추천 시 도움이 됩니다."
                ></CFormTextarea>
                  <br></br><br></br> 
                  <div className="col-4 mx-auto">
                  <CButton type='submit' color="dark" size="lg" 
                  onClick={
                    (e) => {                         
                      editProject(projectEdit); 
                      // setAcademyInfo({});
                      e.preventDefault();
                  } 
                  }
                  >Edit your project!!</CButton> 
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

export default ProjectHistoryEdit




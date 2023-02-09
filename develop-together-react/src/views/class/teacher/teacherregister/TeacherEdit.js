
import React, { Component, useState } from 'react'

// import { CCard, CCardBody,CBadge, CCol, CRow, CContainer, CButton, CImage } from "@coreui/react"

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import classimg from "src/assets/images/class.jpg"
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { BsFillStarFill } from "react-icons/bs";  
import { AiOutlineStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { BiBuildingHouse } from "react-icons/bi"
import { MdSubject } from "react-icons/md"

import 'src/views/pages/registerButton.css'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CBadge,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CFormCheck, CFormSelect } from '@coreui/react/dist'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';



const TeacherEdit = (props) => {
  const location = useLocation();
//   const loginInfo = location.state.loginInfo;
  const loginInfo = window.sessionStorage.getItem("loginInfo");
  const editTeacherInfo = location.state.results;

  const [registers, setRegisters] = useState({
    memberid: editTeacherInfo.memberid,
    region: editTeacherInfo.region,
    education: editTeacherInfo.education,
    career: editTeacherInfo.career,
    scontent: editTeacherInfo.scontent,
    content: editTeacherInfo.content
  })

  const navigate = useNavigate();
  const editTeacher = () => {
    // 유효성 검사
    const url = "http://127.0.0.1:8081/class/teacherEdit";
    axios.post(url, registers, { headers: {"Content-Type": "application/x-www-form-urlencoded"} })
          .then( response => {
            alert('강사 정보가 수정되었습니다.');
            navigate('/class/teacher');
          })
          .catch(e => {
            alert('빈 항목을 입력해주세요.');
          });
        }

    return (
        <div className=" min-vh-150 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-2 " style={{zIndex:0}}>
                  <CCardBody className="p-4">
                    <CForm>
                      <h1>강사 정보 수정</h1>
                      <p className="text-medium-emphasis">Edit teacher information</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 지역</CInputGroupText>
                        <CFormInput placeholder="강의 지역" 
                         value={registers.region} 
                         onChange={(e) => {setRegisters({...registers, "region": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>학력</CInputGroupText>
                        <CFormInput placeholder="학력" 
                         value={registers.education} 
                         onChange={(e) => {setRegisters({...registers, "education": e.target.value})}}
                        autoComplete="education" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>경력</CInputGroupText>
                        <CFormInput placeholder="경력" 
                         value={registers.career} 
                         onChange={(e) => {setRegisters({...registers, "career": e.target.value})}}
                        autoComplete="career" />
                      </CInputGroup>
                      <CFormLabel className="col-sm-2 col-form-label" >한 줄 소개</CFormLabel>
                    <CFormTextarea 
                      value={registers.scontent}
                      onChange={(e) => {setRegisters({...registers, "scontent": e.target.value})}}
                      rows={1}
                      text="자신을 한 줄로 표현해주세요."
                ></CFormTextarea>
                      <CFormLabel className="col-sm-2 col-form-label" >강사 소개</CFormLabel>
                    <CFormTextarea 
                      value={registers.content}
                      onChange={(e) => {setRegisters({...registers, "content": e.target.value})}}
                      rows={5}
                      text="소개 내용을 상세하게 적어주시면 수강생들에게 도움이 됩니다."
                ></CFormTextarea>
                <br></br>
                                   
                      <div className="d-grid">
                        <button
                        onClick={
                          (e) => {                         
                            editTeacher(registers);
                            e.preventDefault();
                          } 
                        }>
                          <div>강사 수정하기</div>
                        <span className='first'></span>
                        <span className='second'></span>
                        <span className='third'></span>
                        <span className='fourth'></span>                    
                        </button>
                      </div>  
                    </CForm>                
                  </CCardBody>              
                </CCard>      
              </CCol>          
            </CRow>        
          </CContainer>      
        </div>
      )
};

export default TeacherEdit;

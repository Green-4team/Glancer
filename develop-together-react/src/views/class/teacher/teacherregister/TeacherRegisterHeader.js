
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



const styles = StyleSheet.create({
  namecard: { 
    textAlign:"center",
    backgroundColor: "skyblue",
    height:"200px",
    borderRadius:"10px",
    fontSize:"30px",
    marginBottom:"50px"
   }
});


const TeacherRegisterHeader = (props) => {
  const location = useLocation();
  // const loginInfo = location.state.loginInfo;
  const loginInfo = window.sessionStorage.getItem("loginInfo");

  const [register, setRegister] = useState({
    memberid: loginInfo.memberId,
    // education: '',
    // career: '',
    // region: '',
    // content: ''
  })


  const navigate = useNavigate();
  const insertTeacher = () => {
    // 유효성 검사
    const url = "http://127.0.0.1:8081/class/teacherRegister";
    axios.post(url, register, { headers: {"Content-Type": "application/x-www-form-urlencoded"} })
          .then( response => {
            alert('강사 정보가 등록되었습니다.');
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
                      <h1>강사 등록</h1>
                      <p className="text-medium-emphasis">Register teacher information</p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 지역</CInputGroupText>
                        <CFormInput placeholder="강의 지역" 
                         value={register.region} 
                         onChange={(e) => {setRegister({...register, "region": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>학력</CInputGroupText>
                        <CFormInput placeholder="학력" 
                         value={register.education} 
                         onChange={(e) => {setRegister({...register, "education": e.target.value})}}
                        autoComplete="education" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>경력</CInputGroupText>
                        <CFormInput placeholder="경력" 
                         value={register.career} 
                         onChange={(e) => {setRegister({...register, "career": e.target.value})}}
                        autoComplete="career" />
                      </CInputGroup>
                      <CFormLabel className="col-sm-2 col-form-label" >강사 소개</CFormLabel>
                    <CFormTextarea 
                      value={register.content}
                      onChange={(e) => {setRegister({...register, "content": e.target.value})}}
                      rows={5}
                      text="소개 내용을 상세하게 적어주시면 수강생들에게 도움이 됩니다."
                ></CFormTextarea>
                <br></br>
                                   
                      <div className="d-grid">
                        <button
                        onClick={
                          (e) => {                         
                            insertTeacher(register);
                            e.preventDefault();
                          } 
                        }>
                          <div>강의 등록하기</div>
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

export default TeacherRegisterHeader;

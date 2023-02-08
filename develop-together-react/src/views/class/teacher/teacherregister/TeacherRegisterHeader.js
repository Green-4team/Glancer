
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
import { Navigate, useNavigate } from 'react-router-dom'
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

  const [register, setRegister] = useState({
    
    name: '',
    phone: '',
    email: '',
    region: '',
    content: ''
  })

  // const changeLanguage = (e) => {
    
  //   let languages = (register.languages.length === 0) ? [] : register.languages.split(",");
  //   if (e.target.checked) {
  //     languages = [...languages, e.target.value];
  //   } else {
  //     for (var i = 0; i < languages.length; i++) {
  //       if (e.target.value === languages[i]) {
  //         languages.splice(i, 1);
  //       }
  //     }
  //   }
  //   setRegister({...register, "languages": languages.toString()});
  //   console.log(register);
  // }


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
                        <CInputGroupText>강사 명</CInputGroupText>
                        <CFormInput placeholder="강사 명" 
                         value={register.name} 
                         onChange={(e) => {setRegister({...register, "name": e.target.value})}}
                        autoComplete="name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>이메일</CInputGroupText>
                        <CFormInput placeholder="이메일을 입력해주세요." 
                         value={register.email} 
                         onChange={(e) => {setRegister({...register, "email": e.target.value})}}
                        autoComplete="email" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>연락처</CInputGroupText>
                        <CFormInput placeholder="연락처를 입력해주세요." 
                         value={register.phone} 
                         onChange={(e) => {setRegister({...register, "phone": e.target.value})}}
                        autoComplete="phone" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>지역</CInputGroupText>
                        <CFormInput placeholder="강의 지역" 
                         value={register.region} 
                         onChange={(e) => {setRegister({...register, "region": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
            
                      {/* <CInputGroup className="mb-3">
                        <CInputGroupText>사용 언어</CInputGroupText> */}
                        &nbsp;&nbsp;&nbsp;
                        {/* <div style={{marginTop: 0}}> */}
                        {/* <CFormCheck value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}}> */}
                        {/* <CFormCheck inline id="inlineCheckbox1" value={1} onChange={ changeLanguage } label="maven"/>
                        <CFormCheck inline id="inlineCheckbox2" value={2} onChange={ changeLanguage } label="gradle"/>
                        <CFormCheck inline id="inlineCheckbox3" value={3} onChange={ changeLanguage } label="java"/>
                        <CFormCheck inline id="inlineCheckbox4" value={4} onChange={ changeLanguage } label="python"/>
                        <br></br>
                        <CFormCheck inline id="inlineCheckbox5" value={5} onChange={ changeLanguage } label="javascript"/>
                        <CFormCheck inline id="inlineCheckbox6" value={6} onChange={ changeLanguage } label="cpu"/>
                        <CFormCheck inline id="inlineCheckbox7" value={7} onChange={ changeLanguage } label="sql"/> */}
                        {/* </CFormCheck> */}
                        {/* </div>
                      </CInputGroup> */}
                      {/* <CInputGroup className="mb-3">
                        <CInputGroupText>총 강의 시간</CInputGroupText>
                        <CFormInput placeholder="총 강의 시간" 
                         value={register.classtime} 
                         onChange={(e) => {setRegister({...register, "classtime": e.target.value})}}
                        autoComplete="classtime" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 시작일</CInputGroupText>
                        <CFormInput type='date' placeholder="강의 시작일"
                            value={register.startdate} 
                            onChange={(e) => {setRegister({...register, "startdate": e.target.value})}}
                            autoComplete="startdate"/>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 종료일</CInputGroupText>
                        <CFormInput type='date' placeholder="강의 종료일"
                            value={register.enddate} 
                            onChange={(e) => {setRegister({...register, "enddate": e.target.value})}}
                            autoComplete="enddate"/>
                      </CInputGroup> */}

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

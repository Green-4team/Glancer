
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

// function aa(){
//     var arr = [];
//     for (var i = 0; i < 10; i++) {
//     arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
//     }
//     return arr
// }

const ClassRegisterHeader = (props) => {

  const [register, setRegister] = useState({
    
    name: '',
    crowd: '',
    region: '',
    language: '',
    startdate: '',
    enddate: '',
    content: ''
  })


  const navigate = useNavigate();
  const insertClass = () => {
    
    const url = "http://127.0.0.1:8081/class/class/classregister";
    axios.post(url, register, { headers: {"Content-Type": "application/x-www-form-urlencoded"} })
          .then( response => {
            alert('강의가 등록되었습니다.');
            navigate('/class/class');
          })
          .catch(e => {
            alert('error');
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
                      <h1>강의 등록</h1>
                      <p className="text-medium-emphasis">Register education information</p>
                      
                      
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 명</CInputGroupText>
                        <CFormInput placeholder="강의 명" 
                         value={register.name} 
                         onChange={(e) => {setRegister({...register, "name": e.target.value})}}
                        autoComplete="name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>정원</CInputGroupText>
                        <CFormInput placeholder="정원을 입력해주세요." 
                         value={register.crowd} 
                         onChange={(e) => {setRegister({...register, "crowd": e.target.value})}}
                        autoComplete="crowd" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>지역</CInputGroupText>
                        <CFormInput placeholder="강의 지역" 
                         value={register.region} 
                         onChange={(e) => {setRegister({...register, "region": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
            
                      <CInputGroup className="mb-3">
                        <CInputGroupText>사용 언어</CInputGroupText>
                        &nbsp;&nbsp;&nbsp;
                        <div style={{marginTop: 0}}>
                        {/* <CFormSelect value={register.classno} onChange={(e) => {setRegister({...register, "classno": e.target.value})}}>
                          <option>사용 언어을 선택해주세요</option>
                          <option value={1}>maven</option>
                          <option value={2}>gradle</option>
                          <option value={3}>java</option>
                          <option value={4}>python</option>
                          <option value={5}>javascript</option>
                          <option value={6}>cpu</option>
                          <option value={7}>sql</option>
                        </CFormSelect> */}
                        {/* <CFormCheck value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}}> */}
                        <CFormCheck inline id="inlineCheckbox1" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="maven"/>
                        <CFormCheck inline id="inlineCheckbox2" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="gradle"/>
                        <CFormCheck inline id="inlineCheckbox3" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="java"/>
                        <CFormCheck inline id="inlineCheckbox4" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="python"/>
                        <br></br>
                        <CFormCheck inline id="inlineCheckbox5" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="javascript"/>
                        <CFormCheck inline id="inlineCheckbox6" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="cpu"/>
                        <CFormCheck inline id="inlineCheckbox7" value={register.language} onChange={(e) => {setRegister({...register, "language": e.target.value})}} label="sql"/>
                        {/* </CFormCheck> */}
                        </div>
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
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 소개</CInputGroupText>
                        <CFormInput placeholder="소개 내용을 입력해주세요." 
                         value={register.content} 
                         onChange={(e) => {setRegister({...register, "content": e.target.value})}}
                        autoComplete="content" />
                      </CInputGroup>
                                   
                      <div className="d-grid">
                        <button type='submit' 
                        itemID='submitClass'
                        onClick={
                          (e) => {                         
                            insertClass(register); 
                            setRegister({});
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

export default ClassRegisterHeader;

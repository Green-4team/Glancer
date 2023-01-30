
import React, { Component } from 'react'

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
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CFormCheck, CFormSelect } from '@coreui/react/dist'
import { useNavigate } from 'react-router-dom'



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

function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
    }
    return arr
}

const TeacherRegisterHeader = (props) => {
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
                        <CInputGroupText>이름</CInputGroupText>
                        <CFormInput placeholder="이름" 
                        //  value={memberInfo.name} 
                        //  onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                        autoComplete="name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>이메일</CInputGroupText>
                        <CFormInput placeholder="이메일" 
                        //  value={memberInfo.name} 
                        //  onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                        autoComplete="email" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>지역</CInputGroupText>
                        <CFormInput placeholder="지역" 
                        //  value={memberInfo.name} 
                        //  onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>사용 언어</CInputGroupText>
                        <CFormInput placeholder="언어" 
                        //  value={memberInfo.name} 
                        //  onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                        autoComplete="language" />
                      </CInputGroup>
                      
                      <CInputGroup className="mb-3">
                        <CInputGroupText>경력</CInputGroupText>
                        <CFormInput type="text"
                        // value={memberInfo.phone} 
                        // onChange={(e) => {setMemberInfo({...memberInfo, "phone": e.target.value})}}
                        placeholder="숫자로만 입력해주세요." autoComplete="career" />
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>소개 내용</CInputGroupText>
                        <CFormInput placeholder="소개 내용을 입력해주세요." 
                        //  value={memberInfo.name} 
                        //  onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                        autoComplete="content" />
                      </CInputGroup>
                                   
                      <div className="d-grid">
                        <button type='submit' 
                        itemID='submitFreelancer'
                        // onClick={
                        //   (e) => {                         
                        //     insertMemberInfo(memberInfo); 
                        //     setMemberInfo({});
                        //     e.preventDefault();
                        // } 
                        // }
                        >
                          <div>강사 등록하기</div>
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

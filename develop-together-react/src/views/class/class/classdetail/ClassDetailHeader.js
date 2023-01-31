
import React, { Component } from 'react'

import { CCard, CCardBody,CBadge, CCol, CRow, CContainer, CButton, CImage } from "@coreui/react"

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
import { BsTelephoneFill } from "react-icons/bs"


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

const ClassDetailHeader = (props) => {
    return (
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                <div style={styles.namecard}>
                                    <div style={{fontSize:"50px", marginTop:"60px"}}>강의 명</div>

                                </div>
                                                                                                 
                                    <CCol xs={{ span: 12 }}>
                                    <div className="p-1"> <h3>강의 정보</h3></div>
                                        <br></br>
                                        <div><strong>< BsFillPersonFill />&nbsp;정원 : </strong></div>
                                        <div><strong>< BiBuildingHouse />&nbsp;강의 지역 : </strong></div>
                                        <div><strong>< MdSubject />&nbsp;사용 언어 : { aa() }</strong></div>
                                        <div><strong>< BiTime />&nbsp;강의 시작일 : </strong></div>
                                        <div><strong>< BiTime />&nbsp;강의 종료일 : </strong></div>
                                    </CCol>
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"20px"}}></div>
                                    </CCol>
                                    <br></br>
                                    <hr></hr>
                                    <CCol xs={{ span: 4 }}>
                                        <br></br>
                                       <div><strong>강의 평점 
                                        <div style={{display:"inline",marginLeft:"80px" }} >
                                       <BsFillStarFill  size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div></strong></div>
                                    </CCol>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <CCol xs={{ span: 4 }}>
                                        <div className="p-1" style={{marginTop:"10px", marginLeft:"80px"}}> 
                                            <CButton color="primary" value='submit' shape="rounded-pill" size="middle">강의 신청</CButton>
                                            &nbsp;&nbsp;
                                            <CButton color="primary" value='modify' shape="rounded-pill" size="middle">수정</CButton>
                                            &nbsp;&nbsp;
                                            <CButton color="primary" value='delete' shape="rounded-pill" size="middle">삭제</CButton>
                                        </div>
                                    </CCol>

                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
    );
};

export default ClassDetailHeader;
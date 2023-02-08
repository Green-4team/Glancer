
import React, { Component, useEffect, useState } from 'react'

import { CCard, CCardBody,CBadge, CCol, CRow, CContainer, CButton, CImage, CCardHeader, CNav, CNavItem, CNavLink } from "@coreui/react"

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
import { TfiEmail } from "react-icons/tfi"
import { FaHome } from "react-icons/fa"
import { SiHtmlacademy } from "react-icons/si"
import { Link, useLocation, useNavigate } from 'react-router-dom';
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

function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
    }
    return arr
}

const TeacherDetailHeader = ({memberid}) => {
    // const location = useLocation();
    // const loginInfo = location.state.loginInfo;
    // const location = useLocation();
    // const memberid = location.state.memberid;

    const [results, setResults] = useState(null);
    // const [apply, setApply] = useState({
    //     memberid: loginInfo.memberId,
    //     classno: classno
    // });

    const navigate = useNavigate();
    // console.log(memberid)
    // debugger;
    useEffect(() => {
        const loadTeacherDetailHeader = async (e) => {
            const url = `http://127.0.0.1:8081/class/teacher/teacherdetail?memberid=${memberid}`;
            const response = await axios.get(url);
            
            setResults(response.data.results);
        };
        loadTeacherDetailHeader();
    }, [memberid]);

    if (!results) {
        return;
    }

    const deleteTeacher = () => {
        // 유효성 검사
        const url = "http://127.0.0.1:8081/class/deleteTeacher?memberid=" + results.memberid;
        axios.get(url)
              .then( response => {
                alert('강사 정보가 삭제되었습니다.');
                navigate('/class/teacher');
              })
              .catch(e => {
                
                alert('error');
              });
            }

    return (
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                <div style={styles.namecard}>
                                    <div style={{fontSize:"50px", marginTop:"60px"}}>강사 명</div>
                                </div>
                                                                                                 
                                    <CCol xs={{ span: 12 }}>
                                    <div className="p-1"> <h3>강사 정보</h3></div>
                                        <br></br>
                                        <div><strong>< BsFillPersonFill />&nbsp;이름 : {results.name}</strong></div>
                                        <div><strong>< TfiEmail />&nbsp;이메일: {results.email}</strong></div>
                                        <div><strong>< FaHome />&nbsp;지역: {results.region}</strong></div>
                                        <div><strong>< SiHtmlacademy />&nbsp;경력 : {results.name}</strong></div>
                                    </CCol>
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"20px"}}></div>
                                    </CCol>
                                    <br></br>
                                    <hr></hr>
                                    <CCol xs={{ span: 4 }}>
                                    <h5><strong>평점 : 
                                        <div style={{display:"inline",marginLeft:"30px" }} >
                                        {results.rate === 0 ? 
                                        <>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : results.rate === 1 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : results.rate === 2 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : results.rate === 3 ?
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : results.rate === 4 ?
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        </> : <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        </>}&nbsp;&nbsp;({results.rate}점)</div></strong></h5>
                                    </CCol>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <CCol xs={{ span: 4 }}>
                                        <div className="p-1" style={{marginTop:"10px", marginLeft:"80px"}}>
                                            <Link to="/class/teacher/teacherEdit" state={{results: results}}> 
                                                <CButton color="primary" value='modify' shape="rounded-pill" size="middle">수정</CButton>
                                            </Link>
                                            &nbsp;&nbsp;
                                            <CButton color="primary" value='delete' shape="rounded-pill" size="middle"
                                            onClick={
                                                (e) => {
                                                    deleteTeacher();
                                                    e.preventDefault();
                                                }
                                            }>삭제</CButton>
                                        </div>
                                    </CCol>

                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>

                <CCol xs={10} style={{margin: "auto"}}>
            <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
            <CCardHeader style={{height:'45px'}}>
            <CNav style={{paddingLeft:0 , marginTop:-5}} variant="tabs" role="tablist">
            <CNavItem >
                <CNavLink style={{height:'42px'}}
                
                > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>강의 상세 정보</span>
                </CNavLink>
            </CNavItem>
            </CNav>
            </CCardHeader>
            <CCardBody>
            {results.content}
            </CCardBody>
            </CCard>
            </CCol>
            </CRow>
    );
};

export default TeacherDetailHeader;

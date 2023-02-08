
import React, { Component, useEffect, useState } from 'react'

import { CCard, CCardBody, CCol,CBadge, CImage, CRow, CContainer, CButton, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane } from "@coreui/react"

import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as icon from '@coreui/icons';
import { BsFillStarFill } from "react-icons/bs";  
import { AiOutlineStar } from "react-icons/ai";
import { BiTime } from "react-icons/bi"
import { BsFillPersonFill } from "react-icons/bs"
import { BiBuildingHouse } from "react-icons/bi"
import { MdSubject } from "react-icons/md"
import { GrMoney } from "react-icons/gr"
import { RxCalendar } from "react-icons/rx"
import axios from 'axios';
import styled from 'styled-components';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ClassEdit from '../classregister/ClassEdit';

// const HoverBlueBlock = styled.div`
// .hoverBlue:hover {color: #24a0ed;}
// `;


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

const ClassDetailHeader = ({ classno }) => {
    const location = useLocation();
    const loginInfo = location.state.loginInfo;

    const [results, setResults] = useState(null);
   
    const [apply, setApply] = useState({
        memberid: loginInfo.memberId,
        classno: classno
    });

    const navigate = useNavigate();
    useEffect(() => {
        const loadClassDetailHeader = async (e) => {
            const url = `http://127.0.0.1:8081/class/class/classdetail?classno=${classno}`;
            const response = await axios.get(url);
            
            setResults(response.data.results);
            console.log(response.data.results)
        };
        loadClassDetailHeader();
    }, [classno]);

    if (!results) {
        return;
    }

    

    const applicationClass = () => {
        // 유효성 검사
        const url = "http://127.0.0.1:8081/class/application";
        axios.post(url, apply, { headers: { "Content-Type": "application/x-www-form-urlencoded"}})
              .then( response => {
                alert('수강신청이 완료되었습니다.');
                navigate('/Mypage', { state: { loginInfo:loginInfo} });
              })
              .catch(e => {
                
                alert('error');
              });
            }

    const deleteClass = () => {
    // 유효성 검사
    const url = "http://127.0.0.1:8081/class/delete?classno=" + results.classno;
    axios.get(url)
          .then( response => {
            alert('강의가 삭제되었습니다.');
            navigate('/class/class');
          })
          .catch(e => {
            alert('error');
          });
        }

    // const editClass = () => {
    // // 유효성 검사
    // const url = "http://127.0.0.1:8081/class/classEdit";
    // axios.post(url, results, { headers: {"Content-Type": "application/x-www-form-urlencoded"} })
    //       .then( response => {
    //         navigate('/class/classEdit');
    //       })
    //       .catch(e => {
    //         alert('error');
    //       });
    //     }
   
    return (
         
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>


                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                <div style={styles.namecard}>
                                    <div style={{fontSize:"50px", marginTop:"60px"}}>{results.name}</div>

                                </div>
                                                                                                 
                                    <CCol xs={{ span: 12 }}>
                                    <div className="p-1"> <h3>강의 정보</h3></div>
                                        <br></br>
                                        <div><strong>< BsFillPersonFill />&nbsp;정원 : {results.crowd}</strong></div>
                                        <div><strong>< BiBuildingHouse />&nbsp;강의 지역 : {results.region}</strong></div>
                                        <div><strong>< MdSubject />&nbsp;사용 언어 : &nbsp;
                                        {
                                            results.tags.map((tag) => {
                                            const { tagName } = tag;
                                            return  (
                                                    <CBadge style={{margin:"2px"}} color="info">{ tagName }</CBadge>
                                                )
                                            })
                                        }</strong></div>
                                        <div><strong>< GrMoney />&nbsp;강의 비용 : {results.price}</strong></div>
                                        <div><strong>< BiTime />&nbsp;총 강의 시간 : {results.classtime}</strong></div>
                                        <div><strong>< RxCalendar />&nbsp;강의 시작일 : {results.startdate}</strong></div>
                                        <div><strong>< RxCalendar />&nbsp;강의 종료일 : {results.enddate}</strong></div>
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
                                            <CButton color="primary" value='submit' shape="rounded-pill" size="middle"
                                            onClick={
                                                (e) => {
                                                    applicationClass(apply);
                                                    e.preventDefault();
                                                }
                                            }>강의 신청</CButton>
                                            &nbsp;&nbsp;
                                            <Link to="/class/class/classEdit" state={{results: results}}>
                                                <CButton color="primary" value='edit' shape="rounded-pill" size="middle">수정</CButton>
                                            </Link>
                                            &nbsp;&nbsp;
                                            <CButton color="primary" value='delete' shape="rounded-pill" size="middle"
                                                onClick={
                                                    (e) => {
                                                        deleteClass();
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
    )
               
}

export default ClassDetailHeader;

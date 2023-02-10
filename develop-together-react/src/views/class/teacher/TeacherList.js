
import React, { useEffect, useState } from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CRow, CContainer, CButton, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link, useLocation } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import axios from 'axios';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const TeacherList = (props) => {
    
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);

    const[results, setResults] = useState(null);

    useEffect(() => {
        const loadTeacherList = async (e)  => {
            const url = `http://127.0.0.1:8081/class/teacher`;
            const response = await axios.get(url);
            setResults(response.data.results);
        };
        loadTeacherList();
    }, [])

    if (!results) {
        return;
    }

    return (
        <>
            <div>
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                    <CCol xs={{ span: 12 }}>
                                        <div className="p-1"><h4>Glancer가 보증하는 강사진!</h4></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 0 }}>
                                        <div className="p-1" > <h2>원하는 강사를 찾아주세요.</h2> <br></br>
                                        {loginInfo === null ? <div><h5><strong>※ Freelancer 계정으로 로그인 하시면 강사로 등록할 수 있습니다.</strong></h5></div> : loginInfo.membertype === 0 ?
                                            <Link to="/class/teacher/teacherregister">
                                                <CButton color="primary" shape="rounded-pill" size="lg">강사 등록</CButton>
                                            </Link> : <div><strong>※ Freelancer 계정으로 로그인 하시면 강사로 등록할 수 있습니다.</strong></div>}
                                        </div>
                                    </CCol>                           
                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
           
        </div> 
            <CCol xs={10} style={{margin: "auto"}}>
                
                    
                    {results.map((result) => {
                        return (
                            <CCard className='mb-3 border-gray' textColor='dark' style={{margin:3}}>
                            <CCardBody>
                            <div className="clearfix">
                            <Link to="/class/teacher/teacherdetail" 
                            state={{memberid: result.memberid, teacherno: result.teacherno}} style={{textDecoration: "none", color: "black"}}>
                            <div style={{textAlign:"center",
                                        display:'inline-block',
                                        verticalAlign:'top',
                                        backgroundColor: "thistle",
                                        height:"280px",
                                        width:"250px",
                                        borderRadius:"10px",
                                        fontSize:"30px",
                                        marginLeft:"20px",
                                        marginTop:"20px"
                                        }}>
                                    <div style={{borderRadius: 10, display:'inline-block', padding: '110px 0px'}}>{result.memberid}</div>

                                </div>
                            <CCardBody style={{ textAlign:'left', marginLeft:'180px', marginTop:'30px', display:'inline-block', width:'500px', overflow:'hidden', position:'relative'}}>
                            <h2>{result.memberid}</h2>
                            <br></br>
                            <h3 style={{ marginBottom:"10px", overflow:'hidden', position:'absolute'}}> </h3>                            
                             <div style={{ marginBottom:"10px", fontSize:"20px", position:'relative'}}><strong>&nbsp;한 줄 소개 : {result.scontent}</strong>
                            </div>    
                            <br></br>
                            &nbsp;
                            <CCol xs={{ span: 12 }}>
                                        
                                        <h5><strong>평점 : 
                                        <div style={{display:"inline",marginLeft:"30px", position:'relative' }} >
                                        {result.rate === 0 ? 
                                        <>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 1 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 2 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 3 ?
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 4 ?
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
                                        </>}&nbsp;&nbsp;({result.rate}점)</div></strong></h5>
                                        
                                    </CCol>                             
                            </CCardBody>
                            </Link>
                        </div>
                        </CCardBody>
                        </CCard>



                    )
                    })}
                        
                    
                
            </CCol>
        </>
    );

};

export default TeacherList;

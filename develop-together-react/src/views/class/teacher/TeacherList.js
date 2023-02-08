
import React, { useEffect, useState } from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CRow, CContainer, CButton, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link, useLocation } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import axios from 'axios';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

const TeacherList = (props) => {
    
    
    // const location = useLocation();
    // const loginInfo = location.state.loginInfo;

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
                                        <div className="p-1"><strong>Glancer가 보증하는 강사진!</strong></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 0 }}>
                                        <div className="p-1" > <h2>원하는 강사를 찾아주세요.</h2> <br></br>
                                        <Link to="/class/teacher/teacherregister">
                                            <CButton color="primary" shape="rounded-pill" size="lg">강사 등록</CButton>
                                        </Link>
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
                            <div className="clearfix">{console.log(result.memberid)}
                            <Link to="/class/teacher/teacherdetail" 
                            state={{memberid: result.memberid}} 
                            style={{textDecoration: "none", color: "black"}}
                            >
                            {/* <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} /> */}
                            <div style={{textAlign:"center",
                                        display:'inline-block',
                                        verticalAlign:'top',
                                        backgroundColor: "skyblue",
                                        height:"200px",
                                        width:"300px",
                                        borderRadius:"10px",
                                        fontSize:"30px",
                                        marginLeft:"20px",
                                        marginTop:"20px"
                                        }}>
                                    <div style={{borderRadius: 10, display:'inline-block', padding: '70px 0px'}}>{result.memberid}</div>

                                </div>
                            <CCardBody style={{ textAlign:'center', marginLeft:'80px',  display:'inline-block', width:'500px'}}>
                            <h2>{result.memberid}</h2>
                            <br></br>
                            <h3 style={{ marginBottom:"10px"}}> </h3>                            
                             <div style={{ marginBottom:"10px", fontSize:"20px"}}><strong>&nbsp;강사 소개 : {result.content}</strong>{/*<strong>&nbsp;사용 언어 : &nbsp;
                            {
                                result.tags.map((tag) => {
                                    const { tagName } = tag;
                                        return  (
                                                <CBadge style={{margin:"2px"}} color="info">{ tagName }</CBadge>
                                            )
                                        })
                            }</strong>*/}</div> 
                            
                            <br></br>
                            &nbsp;
                            <CCol xs={{ span: 12 }}>
                                        
                                        <h5><strong>평점 : 
                                        <div style={{display:"inline",marginLeft:"30px" }} >
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

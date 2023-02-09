
import React, { useEffect, useState } from 'react'
import { CCard, CCardBody,CBadge, CCol, CRow, CContainer, CImage, CButton } from "@coreui/react"
import { StyleSheet } from 'react-native'
import classimg from "src/assets/images/class.jpg"
import { BsFillStarFill } from "react-icons/bs";  
import { AiOutlineStar } from "react-icons/ai";  
import axios from 'axios';
import { async } from 'regenerator-runtime';
import { Link, useLocation } from 'react-router-dom';

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

const FreelancerDetailHeader = ({memberid }) => {
    
    const [results, setResults] = useState(null);
    // const location = useLocation();
    // const loginInfo = location.state.loginInfo;
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);
    

    useEffect(() => {
        const loadFreelancerDetailHeader = async (e) => {
            const url = `http://127.0.0.1:8081/project/freelancer/freelancerdetail?memberid=${memberid}`;
            const response = await axios.get(url);
            setResults(response.data.results);
        };
        loadFreelancerDetailHeader();
    }, [memberid]);

    if (!results) {
        return;
    }
    // console.log(results.value1);
    // console.log(results.value2);
    // console.log(results.value3);
    // console.log(results.value4);
    const valueAvarage = (parseInt(results.value1, 10) + parseInt(results.value2, 10) + parseInt(results.value3, 10) + parseInt(results.value4, 10))/4;
    console.log(valueAvarage);

    return (
        <div>
            <CRow>
                <CCol xs={10} style={{ margin: "auto" }}>
                    <CCard className="mb-2">
                        <CCardBody>
                            <CContainer>
                                <CRow xs={{ gutter: 0 }}>
                                <div style={styles.namecard}>
                                    <div style={{fontSize:"50px", marginTop:"60px"}}> {results.name} 님의 프로필 입니다.</div>
                                </div>
                                    <CCol xs={{ span: 6 }}>
                                        <div className="p-1"> <h3>{results.title}</h3></div>
                                    </CCol>
                                    <CCol xs={{ span: 3}}>
                                        {loginInfo === null ? <div><Link to="/project/freelancer/ProjectRegist" state={{ memberid }} style={{textDecoration: "none", color: "black"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기1</CButton></div>
                                        </Link></div> 
                                        : loginInfo.memberId === memberid ? <div><Link to="/project/freelancer/ProjectRegist" state={{memberid }} style={{textDecoration: "none", color: "black"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기</CButton></div>
                                        </Link></div> : <div><Link to="/project/freelancer/ProjectRegist" state={{ memberid}} style={{textDecoration: "none", color: "black"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기3</CButton></div>
                                        </Link></div>}      
                                    </CCol>   
                                    <CCol xs={{ span: 3 }}>
                                        {loginInfo === null ? <div><Link to="/project/freelancer/PersonalHistoryRegist" state={{memberid }} style={{textDecoration: "none", color: "black", display:"inline-block"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">이력서 등록하기1</CButton></div>
                                        </Link></div>
                                        : loginInfo.memberId === memberid ? <Link to="/project/freelancer/PersonalHistoryRegist" state={{ memberid}} style={{textDecoration: "none", color: "black", display:"inline-block"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">이력서 등록하기</CButton></div>
                                        </Link> : <div><Link to="/project/freelancer/PersonalHistoryRegist" state={{ }} style={{textDecoration: "none", color: "black", display:"inline-block"}}>   
                                        <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">이력서 등록하기3</CButton></div>
                                        </Link></div>}
                                    </CCol>                            
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"-10px", fontWeight:"bold"}}><strong>{results.name} | 평점 {valueAvarage} 점 | 경력 {results.careeryear}년</strong></div>
                                    </CCol>
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"20px"}}></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }} style={{marginRight:"0px"}}>
                                       <div><CImage style={{borderRadius: 60}} src={classimg} width={100} height={100} /> <br></br> <div style={{marginLeft:"25px", marginTop:"10px", fontWeight:"bold"}}> {results.name}</div></div>
                                    </CCol>
                                    <CCol xs={{ span: 4 }}>
                                       <div style={{ marginBottom:"-10px"}}><strong>활동평가 ({valueAvarage})
                                        <div style={{display:"inline",marginLeft:"60px"}} >
                                        { valueAvarage >= 0 && valueAvarage <= 19 ? 
                                       <>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       </> : valueAvarage >= 20 && valueAvarage <= 39 ? 
                                       <>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       </> : valueAvarage >= 40 && valueAvarage <= 59 ? 
                                       <>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       </> : valueAvarage >= 60 && valueAvarage <= 79 ?
                                       <>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <AiOutlineStar size="35"/>
                                       <AiOutlineStar size="35"/>
                                       </> : valueAvarage >= 80 && valueAvarage <= 99 ?
                                        <>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <AiOutlineStar size="35"/> 
                                        </> : <>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                       <BsFillStarFill size="30" color="orange"/>
                                    </>
                                    }</div></strong></div>
                                       <hr></hr><br></br>
                                       <div style={{marginTop:"-30px" }}>전문성 ({results.value1})
                                       <div style={{display:"inline",marginLeft:"96px" }} ></div>
                                       {results.value1 >= 0 && results.value1 <= 19 ? 
                                       <>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value1 >= 20 && results.value1 <= 39 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value1 >= 40 && results.value1 <= 59 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value1 >= 60 && results.value1 <= 79 ?
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value1 >= 80 && results.value1 <= 99 ?
                                        <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/> 
                                        </> : <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                    </>
                                    }</div>
                                       <div style={{marginTop:"" }}>일정준수 ({results.value2})
                                       <div style={{display:"inline",marginLeft:"80px" }} ></div>
                                       {results.value2 >= 0 && results.value2 <= 19 ? 
                                       <>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value2 >= 20 && results.value2 <= 39 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value2 >= 40 && results.value2 <= 59 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value2 >= 60 && results.value2 <= 79 ?
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value2 >= 80 && results.value2 <= 99 ?
                                        <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/> 
                                        </> : <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                    </>
                                    }</div>
                                       <div style={{marginTop:"" }}>적극성 ({results.value3})
                                       <div style={{display:"inline",marginLeft:"96px" }} ></div>
                                       {results.value3 >= 0 && results.value3 <= 19 ? 
                                       <>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value3 >= 20 && results.value3 <= 39 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value3 >= 40 && results.value3 <= 59 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value3 >= 60 && results.value3 <= 79 ?
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value3 >= 80 && results.value3 <= 99 ?
                                        <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/> 
                                        </> : <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                    </>
                                    }</div>
                                       <div style={{marginTop:"" }}>의사소통 ({results.value4})
                                       <div style={{display:"inline",marginLeft:"80px" }} ></div>
                                       {results.value4 >= 0 && results.value4 <= 19 ? 
                                       <>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value4 >= 20 && results.value4 <= 39 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value4 >= 40 && results.value4 <= 59 ? 
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value4 >= 60 && results.value4 <= 79 ?
                                       <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/>
                                       <AiOutlineStar size="25"/>
                                       </> : results.value4 >= 80 && results.value4 <= 99 ?
                                        <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="25"/> 
                                        </> : <>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                    </>
                                    }</div>
                                       <br></br>
                                       <br></br>
                                    </CCol>
                                    <CCol xs={{ span: 6 }}>
                                        <div style={{marginLeft:"20px", height:"200px", borderLeft: "1px solid #aaa"}}>
                                            <div style={{marginLeft:"20px"}}>
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.program1}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.program2}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.program3}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.program4}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.language1}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.language2}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.language3}</CButton>&nbsp;
                                            <CButton style={{margin:"3px", fontWeight:"bold"}}color="warning" >{results.language4}</CButton>&nbsp;
                                            </div>
                                        </div>
                                    </CCol>
                                    <CCol xs={{ span: 12 }}>
                                        <hr></hr>
                                        <strong>{results.introduce} </strong>
                                    </CCol>  
                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div> 
    );

};

export default FreelancerDetailHeader;

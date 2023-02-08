
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

function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="danger">danger</CBadge>)
    }
    return arr
}




const FreelancerDetailHeader = ({memberid }) => {
    const [results, setResults] = useState(null);
    const location = useLocation();
    const loginInfo = location.state.loginInfo;

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
                                        {loginInfo.memberId === memberid ? 
                                    <Link to="/project/freelancer/ProjectRegist" state={{ }} style={{textDecoration: "none", color: "black"}}>   
                                    <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">프로젝트 등록하기</CButton></div>
                                    </Link> :  <div></div>}
                                    </CCol>     
                                    <CCol xs={{ span: 3 }}>
                                    <Link to="/project/freelancer/PersonalHistoryRegist" state={{ }} style={{textDecoration: "none", color: "black", display:"inline-block"}}>   
                                    <div className="p-1" style={{marginLeft:"0px"}}> <CButton color="primary" shape="rounded-pill" size="lg">이력서 등록하기</CButton></div>
                                    </Link>
                                    </CCol>                            
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"-10px", fontWeight:"bold"}}><strong>{results.name} | 평점{results.rate} 점 | 경력 {results.careeryear}년</strong></div>
                                    </CCol>
                                    <CCol xs={{ span: 12 }}>
                                       <div className="p-1" style={{marginTop:"20px"}}></div>
                                    </CCol>
                                    <CCol xs={{ span: 2 }} style={{marginRight:"0px"}}>
                                       <div><CImage style={{borderRadius: 60}} src={classimg} width={100} height={100} /> <br></br> <div style={{marginLeft:"25px", marginTop:"10px", fontWeight:"bold"}}> {results.name}</div></div>
                                    </CCol>
                                    <CCol xs={{ span: 4 }}>
                                       <div><strong>활동평가 
                                        <div style={{display:"inline",marginLeft:"80px" }} >
                                       <BsFillStarFill  size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div></strong></div>
                                       <hr></hr><br></br>

                                       <div style={{marginTop:"-30px" }}>전문성
                                       <div style={{display:"inline",marginLeft:"96px" }} ></div>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div>
                                       

                                       <div style={{marginTop:"" }}>일정준수 
                                       <div style={{display:"inline",marginLeft:"80px" }} ></div>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div>
                                       

                                       <div style={{marginTop:"" }}>적극성
                                       <div style={{display:"inline",marginLeft:"96px" }} ></div>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div>
                                  

                                       <div style={{marginTop:"" }}>의사소통 
                                       <div style={{display:"inline",marginLeft:"80px" }} ></div>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div>

                                       <div style={{marginTop:"" }}>재고용의사 
                                       <div style={{display:"inline",marginLeft:"64px" }} ></div>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div>
                                       <br></br>
                                       <br></br>
                                        
                                    </CCol>
                                    <CCol xs={{ span: 6 }}>
                                        <div style={{marginLeft:"20px", height:"200px", borderLeft: "1px solid #aaa"}}>
                                            <div style={{marginLeft:"20px"}}>{ aa() }</div>
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

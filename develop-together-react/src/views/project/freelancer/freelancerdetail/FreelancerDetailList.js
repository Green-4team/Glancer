
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody, CCol,CBadge,CImage, CCardHeader, CNav, CNavItem, CNavLink, CTabContent, CTabPane, CForm, CFormTextarea, CContainer, CRow, CButton  } from "@coreui/react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from 'axios';

const DramaMainMediaBlock = styled.div`


  margin-left: -15px;
  margin-right: -15px;
 
 
`;


function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">tool</CBadge>)
    }
    return arr
}






const FreelancerDetailList = ({memberid, loginInfo}) => {

    const [activeKey, setActiveKey] = useState(1)
    const [results, setResults] = useState(null);
    const [results2, setResults2] = useState(null);

    useEffect(() => {
      const loadFreelancerDetailList = async (e) => {
        const response = await axios.get(`http://127.0.0.1:8081/project/freelancerDetailList?memberid=${memberid}` )
        setResults(response.data.results)
        console.log(results)
       
        
      }
      loadFreelancerDetailList();
    }, [memberid])

    useEffect(() => {
      const loadPersonalHistory = async (e) => {
        const response = await axios.get(`http://127.0.0.1:8081/project/showPersonalHistory?memberid=${memberid}` )
        setResults2(response.data.results2)
    
      }
      loadPersonalHistory();
    }, [memberid])


    if (!results) {
      return;
    }
    
    return (
        <CCol xs={10} style={{margin: "auto"}}>
    <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
      <CCardHeader style={{height:'45px'}}>
        <CNav style={{paddingLeft:0 , marginTop:-5}} variant="tabs" role="tablist">
          <CNavItem >
            <CNavLink style={{height:'42px'}}
              active={activeKey === 1}
              onClick={() => setActiveKey(1)}
            > <span style={{fontSize:18, fontWeight:"bold", color:"#696969", }}>프로젝트</span>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink style={{height:'42px'}}
              active={activeKey === 2}
              onClick={() => setActiveKey(2)}
            >
              <span style={{fontSize:18, fontWeight:"bold", color:"#696969"}} >이력서</span>
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCardHeader>
      <CCardBody>
        <CTabContent>
          <CTabPane role="동영상탭" aria-labelledby="" visible={activeKey === 1}>
            <CCol xs={15}>
              <CCardBody>
                {results !== null ? 
                <CContainer>
                <DramaMainMediaBlock style={{ marginTop:-15, marginBottom:-15}}>                   
                    {results.map((result) => {
                      return(                        
                        <CCol xs={12} >
                          <CCard textColor='dark' style={{margin:5}}>
                            <CCardBody style={{ marginLeft:'0px'}}>   
                              <CContainer>
                                <CRow>
                                <CCol xs={{ span: 6 }}>
                                <strong>{result.position}</strong> 
                                </CCol>
                                <CCol xs={{ span: 6 }}>
                                {loginInfo === null ? <div></div> : loginInfo.memberId !== null && result.memberid === loginInfo.memberId  ?
                                  <Link to="/project/freelancer/projectedit" state={{result: result}}> 
                                    <CButton style={{marginLeft:"250px"}} color="primary" value='modify' shape="rounded-pill" size="middle">수정</CButton>
                                  </Link> : 
                                  <div></div>}
                                </CCol>
                                <h4>{result.projectname} </h4>
                                <strong style={{ marginBottom:"10px"}}>{result.projectstart} ~ {result.projectend} </strong> <br></br> 
                                <strong style={{ marginBottom:"10px"}}>{result.work}</strong> <br></br>
                                <CCol xs={{ span: 12 }}>
                                <CBadge style={{margin:"2px"}}color="success">{result.language}</CBadge>
                                <CBadge style={{margin:"2px"}}color="danger">{result.dbms}</CBadge>
                                <CBadge style={{margin:"2px"}}color="warning">{result.tool}</CBadge>
                                <CBadge style={{margin:"2px"}}color="info">{result.datatransmission}</CBadge>
                                </CCol>
                              </CRow>
                          </CContainer>
                          </CCardBody>
                        </CCard>
                    </CCol>                  
                      )
                    })}
                    
                </DramaMainMediaBlock>
                </CContainer>
                :
                <div>등록된 프로젝트가 없습니다.</div>
                }
              </CCardBody>
            </CCol>
          </CTabPane>
          <CTabPane role="배경" aria-labelledby="" visible={activeKey === 2}>
            <CCol xs={15}>
              <CCardBody>
              
              {results2 !== null ? 
                <CContainer>
                  <CRow xs={{ gutter: 0 }}>

                  
                    <CCol xs={{ span: 6 }}>
                        <strong>학력</strong>
                    </CCol>           

                     <CCol xs={{ span: 6 }}>
                     <div style={{marginLeft:"250px"}}>{loginInfo === null ? <div></div> : results2.memberid === loginInfo.memberId && loginInfo !== null ?
                  <Link to="/project/freelancer/personalhistoryedit" state={{results2: results2}}> 
                    <CButton color="primary" value='modify' shape="rounded-pill" size="middle">수정</CButton>
                  </Link> : 
                  <div></div>}</div>
                  
                    </CCol>                        
                    <CCol style={{marginTop:"3px"}} xs={{ span: 4 }}>
                    {results2.schoolstart} ~ {results2.schoolend}
                    </CCol>
                    <CCol xs={{ span: 8 }}>
                    {results2.schoolname} / {results2.schoolmajor} / {results2.schoolyeartype} / {results2.schooltype}
                    </CCol>                  
                  </CRow>

                  <CRow xs={{ gutter: 0 }}>
                    <CCol  style={{marginTop:"20px"}} xs={{ span: 12 }}>
                        <strong>경력</strong>
                    </CCol>                                
                    <CCol style={{marginTop:"3px"}} xs={{ span: 4 }}>
                    {results2.startdate} ~ {results2.enddate}
                    </CCol>
                    <CCol xs={{ span: 8 }}>
                    {results2.company} / {results2.depart} / {results2.position}
                    </CCol>                  
                  </CRow>

                  <CRow xs={{ gutter: 0 }}>
                    <CCol  style={{marginTop:"20px"}} xs={{ span: 12 }}>
                        <strong>자격증</strong>
                    </CCol>                                
                    <CCol style={{marginTop:"3px"}} xs={{ span: 4 }}>
                    {results2.certidate}
                    </CCol>
                    <CCol xs={{ span: 8 }}>
                    {results2.certiname} / {results2.certipublisher} 
                    </CCol>                  
                  </CRow>

                  <CRow xs={{ gutter: 0 }}>
                    <CCol  style={{marginTop:"20px"}} xs={{ span: 12 }}>
                        <strong>교육내용</strong>
                    </CCol>                                
                    <CCol style={{marginTop:"3px"}} xs={{ span: 4 }}>
                    {results2.edustart} ~ {results2.eduend}
                    </CCol>
                    <CCol xs={{ span: 8 }}>
                    {results2.eduname} / {results2.edudepart} 
                    </CCol>                  
                  </CRow>
                </CContainer>
                  :
                  <div>등록된 이력서가 없습니다.</div>
                  }
              </CCardBody>
            </CCol>
          </CTabPane> 
        </CTabContent>
      </CCardBody>
    </CCard>
  </CCol>
      
    );

};

export default FreelancerDetailList;

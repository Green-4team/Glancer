
import React, { useEffect, useState } from 'react'

import CIcon from "@coreui/icons-react";
import { CBadge, CButton, CCard, CCardBody, CCardFooter, CCardImage, CCardText, CCardTitle, CCol, CFormInput, CImage, CNavLink, CRow } from "@coreui/react";

import {} from "@coreui/react"
import axios from 'axios';
import SearchItem from './SearchItem';
import styled from 'styled-components';
import { cilAlignLeft, cilChevronDoubleLeft, cilChevronDoubleRight, cilLoopCircular, cilPencil } from '@coreui/icons';
import { Link } from 'react-router-dom';

import classimg from "src/assets/images/class.jpg"
import TeacherImg from 'src/assets/images/teacher.jpg'
import { AiOutlineStar } from 'react-icons/ai';
import { BsFillStarFill } from 'react-icons/bs';


const HoverBlueBlock = styled.div`
.hoverBlue:hover {color: #24a0ed;}
`;

const SearchMain = (props) => {

    
    const [searchKeyword, setSearchKeyword] = useState(null);
    const [category, setCategory] = useState("freelancer");
    const [searchResults, setSearchResults] = useState(0);
    const [results, setResults] = useState(null);
    const [page, setPage] = useState(1);
    const [pager, setPager] = useState(null);

    useEffect(() => {
        if ( searchResults !== 0 ) {
            const loadSearchList = async (e)  => {
                const response = await axios.get(
                    `http://127.0.0.1:8081/search/${category}`, 
                    {params:{searchKeyword : searchKeyword}},
                    {headers:{"Content-Type":"Application/x-www.-form-urlencoded"}}
                    ).catch(function() {
                        console.log('검색 실패');
                    });
                setResults(response.data.results);
            };
            loadSearchList();
        }
    }, [category, searchResults, searchKeyword])

    const btnClickHandler = e => {
        const { name } = e.target;
        setCategory(name);
        setPage(1);
    };

    const searchClickHandler = e => {
        setSearchResults(1)
    };

    console.log("category : " + category)

    // const {pageNo, pageCount} = pager;
    
    return (
        <>
        <CCol xs={8} style={{margin: 'auto'}}>
        <CCard className="mb-4" style={{border: 0}}>
          <CCardBody>
            <div style={{display: 'flex'}}>
              <div style={{textAlign: 'center', display: 'inline-block', width: '70%', margin: 'auto'}}>
                <CFormInput 
                    style={{borderRadius: 40, width: '60%', margin: 'auto'}} 
                    onChange={(e)=>{
                    setSearchKeyword(e.target.value);
                    setSearchResults(0);
                    }}/>
                <CButton style={{textAlign: 'center', display: 'inline-block', width: '50%', margin: 'auto', marginTop: '10px'}}
                onClick={ () => searchClickHandler(results) }
                >검색</CButton>
                <br/><br/>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}} onClick={btnClickHandler} {...(category === "freelancer" ? {active: true} : {})} name="freelancer" >개발자</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}} onClick={btnClickHandler} {...(category === "project" ? {active: true} : {})} name="project" >프로젝트</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}} onClick={btnClickHandler} {...(category === "teacher" ? {active: true} : {})} name="teacher" >강사</CButton>
                <CButton color='light' variant='ghost' style={{color: 'black', marginRight: 20}} onClick={btnClickHandler} {...(category === "education" ? {active: true} : {})} name="education" >강의</CButton>
              </div>
              {/* <div style={{display: 'inline-block', marginLeft: 'auto'}}>
                <CButton color="dark" variant='outline' style={{fontSize: 12}}><CIcon icon={cilAlignLeft} size="sm"/> 최신순</CButton>
              </div> */}
            </div>
            <hr />
            <table className="table">
              <thead>
                <tr style={{verticalAlign: "middle"}}>
                  {/* <th style={{width: "30%"}}>
                    <HoverBlueBlock>
                      <div class="hoverBlue">
                        <CIcon icon={cilLoopCircular} size="lg" onClick={() => setPage(page)}/>
                      </div>
                    </HoverBlueBlock>
                  </th> */}
                  <th style={{width: "30%"}}>
                    <div style={{textAlign: 'right', fontWeight: "normal", fontSize: 14}}>
                      <HoverBlueBlock>
                        {/* <div>{pageNo} / {pageCount} 페이지</div>
                        <CButton onClick={() => setPage(page - 1)}
                                 disabled={page === 1}
                                 style={{marginLeft: 16, color: "black", backgroundColor: "white", border: "none"}}>
                          <div class="hoverBlue"><CIcon icon={cilChevronDoubleLeft} size="lg" /></div>
                        </CButton>
                        <CButton onClick={() => setPage(page + 1)}
                                 disabled={page === pageCount}
                                 style={{color: "black", backgroundColor: "white", border: "none"}}>
                          <div class="hoverBlue"><CIcon icon={cilChevronDoubleRight} size="lg" /></div>
                        </CButton> */}
                        {
                            searchResults !== 0 && results !== null
                            ?
                            (
                              category === "freelancer"
                              ?
                              <CCol xs={10} style={{margin: "auto"}}>
                                  {results.map((result) => {
                                      return (
                                          <CCard className='mb-3 border-gray' textColor='dark'  style={{margin:7}}>
                                          <CCardBody>
                                              <div className="clearfix">
                                                  <Link to="/project/freelancer/freelancerdetail" state={{ memberid: result.memberid}} style={{textDecoration: "none", color: "black"}}>
                                                  <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} />
                                                  <CCardBody style={{ marginLeft:'150px'}}>
                                                  <h4>{result.name} | {result.occupation} </h4> {result.memberid}
                                                  <h2 style={{ marginBottom:"10px"}}>{result.title}</h2>                            
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.program1}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.program2}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.program3}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.program4}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.language1}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.language2}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.language3}</CBadge>
                                                  <CBadge style={{margin:"2px"}}color="danger">{result.language4}</CBadge>
                                                  <br></br><br></br>
                                                  <h5 style={{marginTop:"-10px"}}>수행프로젝트 : 헬로자바, 헬로자바, 헬로자바</h5>                             
                                                  </CCardBody>
                                                  </Link>
                                              </div>
                                          </CCardBody>
                                      </CCard>                       
                                      )
                                  })}
                              </CCol>
                              :
                              (
                                category === "project"
                                ?
                                <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                                  <CCol xs>
                                    <CCard>
                                    <Link to="/class/projectDetail"> 
                                  </Link>        
                                      <CCardImage orientation="top" src={TeacherImg} />
                                      <CCardBody>
                                        <CCardTitle>소개 글</CCardTitle>
                                        <CCardText>
                                          This is a wider card with supporting text below as a natural lead-in to
                                          additional content. This content is a little bit longer.
                                        </CCardText>
                                      </CCardBody>
                                      <CCardFooter>
                                        <small className="text-medium-emphasis">강사 평점 : </small>
                                      </CCardFooter>
                                    </CCard>
                                  </CCol>
                                </CRow>
                                :
                                (
                                  category === "teacher"
                                  ?
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
                                                      backgroundColor: "skyblue",
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
                                  :
                                  (
                                    category === "education"
                                    ?
                                    <CCol xs={10} style={{margin: "auto"}}>
                
                    
                            {results.map((result) => {
                                return (
                                    <CCard className='mb-3 border-gray' textColor='dark' style={{margin:3}}>
                                    <CCardBody>
                                    <div className="clearfix">
                                    <Link to="/class/class/classdetail" state={{classno: result.classno}} style={{textDecoration: "none", color: "black"}}>
                                    <div style={{textAlign:"center",
                                                display:'inline-block',
                                                verticalAlign:'top',
                                                backgroundColor: "skyblue",
                                                height:"280px",
                                                width:"250px",
                                                borderRadius:"10px",
                                                fontSize:"25px",
                                                marginLeft:"20px",
                                                marginTop:"20px"
                                                }}>
                                            <div style={{borderRadius: 10, display:'inline-block', padding: '110px 0px'}}>{result.name}</div>
                                            
                                        </div>
                                    <CCardBody style={{ textAlign:'left', marginLeft:'200px', marginTop:'15px', display:'inline-block', width:'500px'}}>
                                    
                                    <h2>{result.name}</h2>
                                    <br></br>

                                    <h3 style={{ marginBottom:"10px"}}> </h3>                            
                                    <div style={{ marginBottom:"10px", fontSize:"20px"}}><strong>&nbsp;학원 명 : {result.memberid}
                                    </strong></div>
                                    <br></br>
                                    
                                    <h3 style={{ marginBottom:"10px"}}> </h3>                            
                                    <div style={{ marginBottom:"10px", fontSize:"20px"}}><strong>&nbsp;사용 언어 : &nbsp;
                                    {
                                        result.tags.map((tag) => {
                                            const { tagName } = tag;
                                                return  (
                                                        <CBadge style={{margin:"2px"}} color="info">{ tagName }</CBadge>
                                                    )
                                                })
                                    }</strong></div>
                                    
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
                                    :
                                    <></>
                                  )
                                )
                              )
                              
                              
                            )
                            // results.map( () => {
                            //     return (<SearchItem searchKeyword={ searchKeyword } category={ category } page={ page }/>);
                            // })
                            :
                            <></>
                        }
                      </HoverBlueBlock>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
              {/* <Pagination total={500} page={page} setPage={setPage} /> */}
          </CCardBody>
        </CCard>
        </CCol>
        </>
    );
};

export default SearchMain;

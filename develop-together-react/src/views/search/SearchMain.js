
import React, { useEffect, useState } from 'react'

import CIcon from "@coreui/icons-react";
import { CButton, CCard, CCardBody, CCol, CFormInput, CNavLink } from "@coreui/react";

import {} from "@coreui/react"
import axios from 'axios';
import SearchItem from './SearchItem';
import styled from 'styled-components';
import { cilAlignLeft, cilChevronDoubleLeft, cilChevronDoubleRight, cilLoopCircular, cilPencil } from '@coreui/icons';

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
                    {headers:{"Content-Type":"Application/x-www.-form-urlencoded , text/plain, multipart/form-data"}}
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
                            results.map( () => {
                                return (<SearchItem searchKeyword={ searchKeyword } category={ category } page={ page }/>);
                            })
                            :
                            <SearchItem/>
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

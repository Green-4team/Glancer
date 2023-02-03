import { CButton, CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchHeader = (props) => {

    const [results, setResults] = useState(null);

    const [category, setCategory] = useState(null); // 검색창 태그분류
    const [tagPage, setTagPage] = useState(null); // 태그 하위분류 페이지
    const [tag, setTag] = useState(null);

    const [searchKeyword, setSearchKeyword] = useState(null);
    const [searchResults, setSearchResult] = useState(null);

    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null);

    useEffect( () => {

        if (searchKeyword === null | searchKeyword === "") {
            const loadPersonList = async (e) => {
                
                const response = await axios.get();
                setResults(response.data.results);
                
            }
            loadPersonList();
            
        } else {
            const searchPersonList = async (e) =>{
                
                const responseSearch = await axios.get();
                setSearchResult(responseSearch.data.results);
                
            }
            searchPersonList();
        }
    }, [page, searchKeyword] );

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
                                    <CCol xs={{ span: 12 }}>
                                        <div className="p-1"><strong>Glancer 통합 검색 페이지</strong></div>
                                    </CCol>                                
                                    <CCol xs={{ span: 0 }}>
                                        <div className="p-1" > <h2>업무 분야</h2> <br></br>
                                        <CButton color="primary" shape="rounded-pill" size="lg">개발</CButton>
                                        <CButton color="primary" shape="rounded-pill" size="lg">퍼블리싱</CButton>
                                        <CButton color="primary" shape="rounded-pill" size="lg">디자인</CButton>
                                        <CButton color="primary" shape="rounded-pill" size="lg">기획</CButton>
                                        <CButton color="primary" shape="rounded-pill" size="lg">기타</CButton>
                                        </div>
                                    </CCol>                           
                                </CRow>
                            </CContainer>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>

    )

}

export default SearchHeader;
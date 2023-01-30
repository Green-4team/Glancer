import { CCard, CCardBody, CCol, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";

const SearchList = (props) => {

    const [results, setResults] = useState(null);

    const [category, setCategory] = useState(null); // 검색창 태그분류
    const [tagPage, setTagPage] = useState(null); // 태그 하위분류 페이지
    const [tag, setTag] = useState(null);

    const [searchKeyword, setSearchKeyword] = useState(null);
    const [searchResults, setSearchResult] = useState(null);

    const [pageType, setPageType] = useState(null);

    const [page, setPage] = useState(1);
    const [total_pages, setTotal_pages] = useState(null);

    useEffect( () => {

        if (searchKeyword === null | searchKeyword === "") {
            const loadPersonList = async (e) => {
                
                const response = await axios.get();
                setResults(response.data.results);
                setPage(response.data.page);
                setTotal_pages(response.data.total_pages);
                setPageType("field");
                setSearchKeyword(null);
            }
            loadPersonList();
            
        } else {
            const searchPersonList = async (e) =>{
                
                const responseSearch = await axios.get();
                setSearchResult(responseSearch.data.results);
                setPage(responseSearch.data.page);
                setPageType("searchKeyword");
            }
            searchPersonList();
        }
    }, [page, searchKeyword] );

    if (!results) {
        return;
    }

    if (pageType === "field") {
        return;
    } else if (pageType === "tech") {
        return;
    } else if (pageType === "local") {
        return;
    } else if (pageType === "skill") {
        return;
    } else if (pageType === "searchKeyword") {
        return;
    } else {
        return;
    }
};

export default SearchList;

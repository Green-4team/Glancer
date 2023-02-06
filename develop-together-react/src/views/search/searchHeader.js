import { CButton, CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchHeader = (props) => {

    const [results, setResults] = useState(null);

    const [searchKeyword, setSearchKeyword] = useState(null);
    const [searchResult, setSearchResult] = useState(null);

    const [checkedInputs, setCheckedInputs] = useState([]);

    const url = `http://127.0.0.1:8081/search/search`;

    useEffect( () => {

        const loadSearchPage = async (e) =>{
            const responseSearch = await axios.get(url);
            setSearchResult(responseSearch.data.results);
            
        }
        loadSearchPage();
        
    }, [url] );


    if (!results) {
        return;
    }
}

export default SearchHeader;
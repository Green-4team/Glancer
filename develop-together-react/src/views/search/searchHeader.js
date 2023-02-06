import { CButton, CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const SearchHeader = (props) => {


    const [searchKeyword, setSearchKeyword] = useState(null);
    const [checkedInputs, setCheckedInputs] = useState([]);


    return (
        <>
            <input onChange={(e)=>{
            setSearchKeyword(e.target.value);
            }}/>

            <button
            onClick={ () => {
                axios.get('/search',{
                    params:{
                    searchKeyword : searchKeyword
                    }
                }).catch(function(){
                    console.log('Search Fail')
                })
            }}
            >검색</button>
        </>
    )
}

export default SearchHeader;
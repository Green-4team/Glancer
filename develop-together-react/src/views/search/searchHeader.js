import { CButton, CCard, CCardBody, CCol, CContainer, CRow } from "@coreui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchList from "./SearchList";

const SearchHeader = (props) => {


    const [searchKeyword, setSearchKeyword] = useState(null);
    const [category, setCategory] = useState("freelancer");

    return (
        <>
            <input onChange={(e)=>{
            setSearchKeyword(e.target.value);
            }}/>

            <button
            onClick={ () => {
                SearchList.get('/search/'+{category},{
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
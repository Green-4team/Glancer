
import React, { useEffect, useState } from 'react'
import { CCard, CRow, CContainer, CButton, CCardBody, CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchItem from './SearchItem';

const SearchList = (props) => {
    const [results, setResults] = useState(null);
    const [tagType, setTagType] = useState("field");

    useEffect(() => {
        const loadSearchList = async (e)  => {
            const url = `http://127.0.0.1:8081/search/search`;
            const response = await axios.get(url);
            setResults(response.data.results);
        };
        loadSearchList();
    }, [])

    if (!results) {
        return;
    }
    if (tagType === "field") {
        return;
    } else if (tagType === "tech") {
        return;
    } else if (tagType === "local") {
        return;
    } else if (tagType === "skill") {
        return;
    } else if (tagType === "searchKeyword") {
        return;
    }

        <CCol xs={10} style={{margin: "auto"}}>
            
                
                {results.map((result) => {
                    return (
                        <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
                        <CCardBody>
                        <div className="clearfix">
                        <Link to="/class/class/classdetail" state={{classno: result.classno}} style={{textDecoration: "none", color: "black"}}>
                        <CCardBody style={{ marginLeft:'150px'}}>
                        <h2>{result.name}</h2>
                        <br></br>   
                        <h3 style={{ marginBottom:"10px"}}> </h3>                            
                        <div><strong>&nbsp;사용 언어 : &nbsp;
                        {
                            result.tags.map((tag) => {
                                const { tagName } = tag;
                                    return  (
                                            <CBadge style={{margin:"2px"}} color="info">{ tagName }</CBadge>
                                        )
                                    })
                        }</strong></div>
                        </CCardBody>
                        </Link>
                    </div>
                    </CCardBody>
                    </CCard>
                )
                })}
                
        </CCol>               
};

export default SearchList;

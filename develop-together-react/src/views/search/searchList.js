
import React, { useEffect, useState } from 'react'
import { CCard, CRow, CContainer, CButton, CCardBody, CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchItem from './SearchItem';

const SearchList = (searchKeyword, category) => {
    
    const [results, setResults] = useState(null);
    
        <CCol xs={10} style={{margin: "auto"}}>
                      
                {results.map((result) => {
                    return (
<<<<<<< HEAD
=======

>>>>>>> 8fdbad4ae022c6fd0cbf560f83869965ae768c22
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

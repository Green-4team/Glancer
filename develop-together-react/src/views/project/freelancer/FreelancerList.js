
import React, { useEffect, useState } from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';

import axios from 'axios';




function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="danger">danger</CBadge>)
    }
    return arr
}

const FreelancerList = (props) => {
    const[results, setResults] = useState(null);

    useEffect(() => {
        const loadFreelancerList = async (e) => {
            const url = `http://127.0.0.1:8081/project/freelancer`;
            const response = await axios.get(url);
            setResults(response.data.results);
        };
        loadFreelancerList();
    }, [])

    if (!results) {
        return;
    }

    return (
            <>
            <CCol xs={10} style={{margin: "auto"}}>
                {results.map((result) => {
                    return (
                        <CCard className='mb-3 border-gray' textColor='dark'  style={{margin:7}}>
                        <CCardBody>
                            <div className="clearfix">
                                <Link to="/project/freelancer/freelancerdetail" state={{ memberid: result.memberid}} style={{textDecoration: "none", color: "black"}}>
                                <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} />
                                <CCardBody style={{ marginLeft:'150px'}}>
                                <h4>{result.name} | {result.occupation} </h4>
                                <h2 style={{ marginBottom:"10px"}}>{result.title}</h2>                            
                                    { aa() } 
                                
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
            </>
        );

    };

export default FreelancerList;

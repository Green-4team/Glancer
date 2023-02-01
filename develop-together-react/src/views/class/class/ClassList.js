
import React, { useEffect, useState } from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import axios from 'axios';
import ClassListItem from './ClassListItem';

function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">danger</CBadge>)
    }
    return arr
}


const ClassList = (props) => {
    const[results, setResults] = useState(null);

    useEffect(() => {
        const loadClassList = async (e)  => {
            const url = `http://127.0.0.1:8081/class/class`;
            const response = await axios.get(url);
            setResults(response.data.results);
        };
        loadClassList();
    }, [])

    if (!results) {
        return;
    }

    return (
        <>
            <CCol xs={10} style={{margin: "auto"}}>
                
                    
                    {results.map((result) => {
                        return (
                            <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
                            <CCardBody>
                            <div className="clearfix">
                            <Link to="/class/class/classdetail" state={{classno: result.classno}} style={{textDecoration: "none", color: "black"}}>
                            <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} />
                            <CCardBody style={{ marginLeft:'150px'}}>
                            <h2>{result.name}</h2>
                            <br></br>
                            <h4 style={{ marginBottom:"10px"}}> </h4>                            
                                { aa() } 
                            
                            <br></br><br></br>
                            &nbsp;
                            <CCol xs={{ span: 4 }}>
                                        
                                        <h5><strong>평점 : {result.rate}
                                        <div style={{display:"inline",marginLeft:"30px" }} >
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill size="20" color="orange"/>
                                        <BsFillStarFill size="20" color="orange"/>
                                        <BsFillStarFill size="20" color="orange"/>
                                        <AiOutlineStar size="23"/></div></strong></h5>
                                    </CCol>                             
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

export default ClassList;

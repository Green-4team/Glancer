
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';
import { BiTime } from "react-icons/bi"




function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="info">danger</CBadge>)
    }
    return arr
}

function list(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CCol xs={10} style={{margin: "auto"}}>
                <CCard className='mb-3 border-gray' textColor='dark' style={{margin:7}}>
                    <CCardBody>
                        <div className="clearfix">
                            <Link to="/class/class/classdetail" style={{textDecoration: "none", color: "black"}}>
                            <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} />
                            <CCardBody style={{ marginLeft:'150px'}}>
                            <h2>강의 명</h2>
                            <br></br>
                            <h4 style={{ marginBottom:"10px"}}>강의 소개 </h4>                            
                                { aa() } 
                            
                            <br></br><br></br>
                            &nbsp;
                            <h5 style={{marginTop:"-10px"}}>경력 : </h5>
                            <br></br>
                            <h5 style={{marginTop:"-10px"}}>평점 : </h5>                             
                            </CCardBody>
                            </Link>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>)
    }
    return arr
}


const ClassList = (props) => {
    
    return (
        <div>
           { list() }
            
        </div> 
      
    );

};

export default ClassList;

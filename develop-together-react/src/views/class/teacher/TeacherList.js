
import React from 'react'
import teacherimg from "src/assets/images/teacher.jpg"
import { CCard, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';
import { BsFillStarFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";



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
                            <Link to="/class/teacher/teacherdetail" style={{textDecoration: "none", color: "black"}}>
                            <CImage  align="start" style={{borderRadius: 10}} src={teacherimg} width={150} height={225} />
                            <CCardBody style={{ marginLeft:'150px'}}>
                            <h2>강사 명</h2>
                            <br></br>
                            <h4 style={{ marginBottom:"10px"}}>강사 소개 </h4>                            
                                { aa() } 
                            
                            <br></br><br></br>
                            &nbsp;
                            <CCol xs={{ span: 4 }}>
                                        
                                       <h5><strong>평점 : 
                                        <div style={{display:"inline",marginLeft:"30px" }} >
                                       <BsFillStarFill  size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <BsFillStarFill size="20" color="orange"/>
                                       <AiOutlineStar size="23"/></div></strong></h5>
                                       <h5><strong>경력 : </strong></h5>
                                    </CCol>                             
                            </CCardBody>
                            </Link>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>)
    }
    return arr
}


const TeacherList = (props) => {
    
    return (
        <div>
           { list() }
            
        </div> 
      
    );

};

export default TeacherList;

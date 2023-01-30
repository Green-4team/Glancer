
import React from 'react'
import classimg from "src/assets/images/class.jpg"
import { CCard, CCardBody,CImage,CBadge, CCol,  } from "@coreui/react"
import { Link } from 'react-router-dom';




function aa(){
    var arr = [];
    for (var i = 0; i < 10; i++) {
    arr.push(<CBadge style={{margin:"2px"}}color="danger">danger</CBadge>)
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
                            <Link to="/project/freelancer/freelancerdetail" style={{textDecoration: "none", color: "black"}}>
                            <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} />
                            <CCardBody style={{ marginLeft:'150px'}}>
                            <h4>정윤석 | 개발자 </h4>
                            <h2 style={{ marginBottom:"10px"}}>준비된 개발자 정윤석 입니다. </h2>                            
                                { aa() } 
                            
                            <br></br><br></br>
                            <h5 style={{marginTop:"-10px"}}>수행프로젝트 : 헬로자바, 헬로자바, 헬로자바</h5>                             
                            </CCardBody>
                            </Link>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>)
    }
    return arr
}


const FreelancerList = (props) => {
    
    return (
        <div>
           { list() }
            
        </div> 
      
    );

};

export default FreelancerList;

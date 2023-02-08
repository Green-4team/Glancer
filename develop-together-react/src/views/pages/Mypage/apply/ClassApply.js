import { CBadge, CButton, CCard, CCardBody, CCardHeader, CCol, CContainer, CNav, CNavItem, CNavLink, CRow } from "@coreui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import { BiBuildingHouse, BiTime } from "react-icons/bi";
import { BsFillPersonFill, BsFillStarFill } from "react-icons/bs";
import { GrMoney } from "react-icons/gr";
import { MdSubject } from "react-icons/md";
import { RxCalendar } from "react-icons/rx";
import { StyleSheet } from "react-native";
import { Link } from "react-router-dom";



const ClassApply = ({loginInfo}) =>{

    const styles = StyleSheet.create({
        namecard: { 
          textAlign:"center",
          backgroundColor: "skyblue",
          height:"200px",
          borderRadius:"10px",
          fontSize:"30px",
          marginBottom:"50px"
         }
      });
    
    const [ClassApplyInfo, setClassApplyInfo] = useState([]);

    useEffect(() => {
        const loadClassApplyInfoInfo = async (e) => {
            const url = `http://127.0.0.1:8081/account/loadClassApplyInfoInfo?memberId=${loginInfo.memberId}`;
            const response = await axios.get(url);
            setClassApplyInfo(response.data.results);
            console.log(response.data.results);
        };
        loadClassApplyInfoInfo();
    }, [loginInfo.memberId]);

    return (
        <CCol xs={12} style={{margin: "auto"}}>                
                    
                    {ClassApplyInfo.map((result) => {
                        return (
                            <CCard className='mb-3 border-gray' textColor='dark' style={{margin:3}}>
                            <CCardBody>
                            <div className="clearfix">
                            <Link to="/class/class/classdetail" state={{classno: result.classno, loginInfo: loginInfo}} style={{textDecoration: "none", color: "black"}}>
                            {/* <CImage  align="start" style={{borderRadius: 10}} src={classimg} width={150} height={225} /> */}
                            <div style={{textAlign:"center",
                                        display:'inline-block',
                                        verticalAlign:'top',
                                        backgroundColor: "skyblue",
                                        height:"200px",
                                        width:"300px",
                                        borderRadius:"10px",
                                        fontSize:"30px",
                                        marginLeft:"20px",
                                        marginTop:"20px"
                                        }}>
                                    <div style={{borderRadius: 10, display:'inline-block', padding: '70px 0px'}}>{result.name}</div>

                                </div>
                            <CCardBody style={{ textAlign:'center', marginLeft:'80px',  display:'inline-block', width:'500px'}}>
                            <h2>{result.name}</h2>
                            &nbsp;
                            <div><strong>< GrMoney />&nbsp;강의 비용 : {result.price}</strong></div>
                            <div><strong>< BiBuildingHouse />&nbsp;강의 지역 : {result.region}</strong></div>
                            <div><strong>< RxCalendar />&nbsp;강의 시작일 : {result.startdate}</strong></div>
                            <div><strong>< RxCalendar />&nbsp;강의 종료일 : {result.enddate}</strong></div>
                            {result.applicationstate === false ? <div style={{color:'red'}}><strong>신청 대기중</strong></div> : <div style={{color:'green'}}><strong>신청 완료</strong></div>}                           
                            <br></br>
                            <CCol xs={{ span: 12 }}> 
                                                                              
                                        <h5><strong>평점 : 
                                        <div style={{display:"inline",marginLeft:"30px" }} >
                                        {result.rate === 0 ? 
                                        <>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 1 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 2 ? 
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 3 ?
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        <AiOutlineStar size="23"/>
                                        </> : result.rate === 4 ?
                                        <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <AiOutlineStar size="23"/>
                                        </> : <>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        <BsFillStarFill  size="20" color="orange"/>
                                        </>}&nbsp;&nbsp;({result.rate}점)</div></strong></h5>
                                        
                                    </CCol>  
                                    
                            </CCardBody>
                            </Link>
                        </div>                        
                        </CCardBody>
                        </CCard>



                    )
                    })}
                        
                    
                
            </CCol>
    )



}


export default ClassApply
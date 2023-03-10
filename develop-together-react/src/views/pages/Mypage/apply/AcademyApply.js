



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



const AcademyApply = ({loginInfo}) =>{

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
    
    const [ClassApplyInfoInAca, setClassApplyInfoInAca] = useState([]);

    useEffect(() => {
        const loadClassApplyInfoInfo = async (e) => {
            const url = `http://127.0.0.1:8081/account/loadClassApplyInfoInAca?memberId=${loginInfo.memberId}`;
            const response = await axios.get(url);
            setClassApplyInfoInAca(response.data.results);
            console.log(response.data.results);
        };
        loadClassApplyInfoInfo();
    }, [loginInfo.memberId]);

    return (
        <CCol xs={12} style={{margin: "auto"}}>                
                    
                    {ClassApplyInfoInAca.map((result) => {
                        return (
                            <CCard className='mb-3 border-gray' textColor='dark' style={{margin:3}}>
                            <CCardBody>
                            <div className="clearfix">
                            <Link to="/class/class/classdetail" state={{classno: result.classno}} style={{textDecoration: "none", color: "black"}}>
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
                                    <div style={{borderRadius: 10, display:'inline-block', padding: '70px 0px'}}>{result.title}</div>

                                </div>
                            <CCardBody style={{ textAlign:'center', marginLeft:'80px',  display:'inline-block', width:'500px'}}>
                            <h2>{result.title}</h2>
                            &nbsp;
                            <div><strong>< GrMoney />&nbsp;?????? ?????? : {result.price}</strong></div>
                            <div><strong>< BiBuildingHouse />&nbsp;?????? ?????? : {result.region}</strong></div>
                            <div><strong>< RxCalendar />&nbsp;?????? ????????? : {result.startdate}</strong></div>
                            <div><strong>< RxCalendar />&nbsp;?????? ????????? : {result.enddate}</strong></div>                                                    
                            <br></br>
                            <CCol xs={{ span: 12 }}> 
                                                                              
                                        <h5><strong>?????? : 
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
                                        </>}&nbsp;&nbsp;({result.rate}???)</div></strong></h5>
                                        
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


export default AcademyApply
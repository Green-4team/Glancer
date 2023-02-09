
import React, { Component, useState } from 'react'

// import { CCard, CCardBody,CBadge, CCol, CRow, CContainer, CButton, CImage } from "@coreui/react"

import 'src/views/pages/registerButton.css'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CBadge,
  CFormLabel,
  CInputGroup,
  CInputGroupText,
  CFormTextarea,
  CRow,
} from '@coreui/react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CFormCheck, CFormSelect } from '@coreui/react/dist'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

const ClassEdit = (props) => {
  const location = useLocation();
  const editClassInfo = location.state.results;

  const [registers, setRegisters] = useState({
    classno: editClassInfo.classno,
    name: editClassInfo.name,
    crowd: editClassInfo.crowd,
    price: editClassInfo.price,
    region: editClassInfo.region,
    // languages: editClassInfo.tags,
    classtime: editClassInfo.classtime,
    startdate: editClassInfo.startdate,
    enddate: editClassInfo.enddate,
    content: editClassInfo.content
  })

  const changeLanguage = (e) => {
    
    let languages = []
    //languages = registers.languages.map((i) => i.tagNo)
    //console.log(languages)
    //setRegisters({...registers, "languages": languages.toString()});
    languages = (registers.languages == null || registers.languages.length === 0) ? [] : registers.languages.toString().split(",");
    if (e.target.checked) {
      languages = [...languages, e.target.value];
    } else {
      for (var i = 0; i < languages.length; i++) {
        if (e.target.value === languages[i]) {
          languages.splice(i, 1);
        }
      }
    }
    setRegisters({...registers, "languages": languages.toString()});
  }


  const navigate = useNavigate();
  const editClass = () => {
    // 유효성 검사
    const url = "http://127.0.0.1:8081/class/classEdit"; //+ "&languages=" + registers.languages;
    axios.post(url, registers, { headers: {"Content-Type": "application/x-www-form-urlencoded"} })
          .then( response => {
            alert('강의가 수정되었습니다.');
            navigate('/class/class');
          })
          .catch(e => {
            alert('빈 항목을 입력해주세요.');
          });
        }

    return (
        <div className=" min-vh-150 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol md={9} lg={7} xl={6}>
                <CCard className="mx-2 " style={{zIndex:0}}>
                  <CCardBody className="p-4">
                    <CForm>
                      <h1>강의 수정</h1>
                      <p className="text-medium-emphasis">Edit education information</p>
                      
                      
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 명</CInputGroupText>
                        <CFormInput placeholder="강의 명" 
                         value={registers.name} 
                         onChange={(e) => {setRegisters({...registers, "name": e.target.value})}}
                        autoComplete="name" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>정원</CInputGroupText>
                        <CFormInput placeholder="숫자로만 입력해주세요." 
                         value={registers.crowd} 
                         onChange={(e) => {setRegisters({...registers, "crowd": e.target.value})}}
                        autoComplete="crowd" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 비용</CInputGroupText>
                        <CFormInput placeholder="숫자로만 입력해주세요." 
                         value={registers.price} 
                         onChange={(e) => {setRegisters({...registers, "price": e.target.value})}}
                        autoComplete="price" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>지역</CInputGroupText>
                        <CFormInput placeholder="강의 지역" 
                         value={registers.region} 
                         onChange={(e) => {setRegisters({...registers, "region": e.target.value})}}
                        autoComplete="region" />
                      </CInputGroup>
            
                      <CInputGroup className="mb-3">
                        <CInputGroupText>사용 언어</CInputGroupText>
                        &nbsp;&nbsp;&nbsp;
                        <div style={{marginTop: 0}}>
                        {/* <CFormCheck value={registers.language} onChange={(e) => {setRegisters({...registers, "language": e.target.value})}}> */}
                        <CFormCheck inline id="inlineCheckbox1" value={1} onChange={ changeLanguage } label="maven"/>
                        <CFormCheck inline id="inlineCheckbox2" value={2} onChange={ changeLanguage } label="gradle"/>
                        <CFormCheck inline id="inlineCheckbox3" value={3} onChange={ changeLanguage } label="java"/>
                        <CFormCheck inline id="inlineCheckbox4" value={4} onChange={ changeLanguage } label="python"/>
                        <br></br>
                        <CFormCheck inline id="inlineCheckbox5" value={5} onChange={ changeLanguage } label="javascript"/>
                        <CFormCheck inline id="inlineCheckbox6" value={6} onChange={ changeLanguage } label="cpu"/>
                        <CFormCheck inline id="inlineCheckbox7" value={7} onChange={ changeLanguage } label="sql"/>
                        {/* </CFormCheck> */}
                        </div>
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>총 강의 시간</CInputGroupText>
                        <CFormInput placeholder="총 강의 시간" 
                         value={registers.classtime} 
                         onChange={(e) => {setRegisters({...registers, "classtime": e.target.value})}}
                        autoComplete="classtime" />
                      </CInputGroup>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 시작일</CInputGroupText>
                        <CFormInput type='date' placeholder="강의 시작일"
                            value={registers.startdate} 
                            onChange={(e) => {setRegisters({...registers, "startdate": e.target.value})}}
                            autoComplete="startdate"/>
                      </CInputGroup>

                      <CInputGroup className="mb-3">
                        <CInputGroupText>강의 종료일</CInputGroupText>
                        <CFormInput type='date' placeholder="강의 종료일"
                            value={registers.enddate} 
                            onChange={(e) => {setRegisters({...registers, "enddate": e.target.value})}}
                            autoComplete="enddate"/>
                      </CInputGroup>

                      <CFormLabel className="col-sm-2 col-form-label" >상세 소개</CFormLabel>
                    <CFormTextarea 
                      value={registers.content}
                      onChange={(e) => {setRegisters({...registers, "content": e.target.value})}}
                      rows={5}
                      text="강의 내용을 상세하게 적어주시면 수강생들에게 도움이 됩니다."
                ></CFormTextarea>
                <br></br>
                                   
                      <div className="d-grid">
                        <button
                        onClick={
                          (e) => {                         
                            editClass(registers);
                            e.preventDefault();
                          } 
                        }>
                          <div>강의 수정하기</div>
                        <span className='first'></span>
                        <span className='second'></span>
                        <span className='third'></span>
                        <span className='fourth'></span>                    
                        </button>
                      </div>  
                    </CForm>                
                  </CCardBody>              
                </CCard>      
              </CCol>          
            </CRow>        
          </CContainer>      
        </div>
      )
};

export default ClassEdit;

import React, { useState } from 'react'
import axios from 'axios'

import 'src/views/pages/registerButton.css'
import {
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { CFormCheck, CFormSelect } from '@coreui/react/dist'
import { useNavigate } from 'react-router-dom'

const RegisterFreeLancer = (props) => {

  const [memberInfo, setMemberInfo] = useState({
    memberId: '',
    password: '',
    checkPassword: '',
    name: '',
    birthday: '',
    occupation: '',
    phone: '',
    startdate: '',
    email: '',
    workstate:'',

  })
  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const navigate = useNavigate();
  //로그인 회원가입 
  const insertMemberInfo = () => {

    if (memberInfo.memberId.length === 0) {
      alert('아이디를 입력해주세요');
      return;
    } else if (memberInfo.password !== memberInfo.checkPassword){
      alert('비밀번호가 일치하지 않습니다');
      return;
    } else if (memberInfo.password.match(passwordRegEx)  === null) {
      alert('비밀번호는 반드시 영어 대소문자와 숫자를 조합한 8 ~ 20 자로 입력해주세요');
      return;
    } else if (memberInfo.name.length === 0){
      alert('성명을 입력해주세요');
      return;
    } else if (memberInfo.name.length === 0) {
      alert('성명을 입력해주세요');
      return;
    } else if (memberInfo.birthday.length === 0) {
      alert('생년월일을 입력해주세요');
      return;
    } else if (memberInfo.occupation.length === 0) {
      alert('직종을 선택해주세요');
      return;
    } else if (memberInfo.phone.length === 0) {
      alert('전화번호를 입력해주세요');
      return;
    } else if (memberInfo.email.length === 0) {
      alert('이메일을 입력해주세요');
      return;
    } else if (memberInfo.email.match(emailRegEx) === null) {
      alert('이메일 형식이 맞지 않습니다');
      return;
    } else if (memberInfo.startdate.length === 0) {
      alert('업무 시작 가능일을 입력해주세요');
      return;
    } 
    // 서버에 데이터 전송 
    // axios.post("http://127.0.0.1:8080/react-web/demo/add-todo", 
    axios.post("http://127.0.0.1:8081/account/freelancerRegister", 
              memberInfo,
              { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
        .then( response => {
          alert('회원가입 완료');
          navigate('/login');
        })
        .catch( e => {          
          alert('error');              
        });
        
  };
  
  
  
    

  return (
    <div className=" min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 " style={{zIndex:0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>프리랜서 계정 생성</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder='사용자 ID' autoComplete="userId" 
                                value={memberInfo.memberId}
                                onChange={(e) => {setMemberInfo({...memberInfo, "memberId": e.target.value})}}
                                />
                  </CInputGroup>                 
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      value={memberInfo.password}
                      onChange={(e) => {setMemberInfo({...memberInfo, "password": e.target.value})}}
                      placeholder="비밀번호는 영어 대소문자와 숫자를 조합한 8 ~ 20 자로 입력해주세요"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      value={memberInfo.checkPassword}
                      onChange={(e) => {setMemberInfo({...memberInfo, "checkPassword": e.target.value})}}
                      placeholder="비밀번호 확인"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>성명</CInputGroupText>
                    <CFormInput placeholder="성명" 
                     value={memberInfo.name} 
                     onChange={(e) => {setMemberInfo({...memberInfo, "name": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>생년월일</CInputGroupText>
                    <CFormInput type='date' placeholder="생년월일"
                    value={memberInfo.birthday} 
                    onChange={(e) => {setMemberInfo({...memberInfo, "birthday": e.target.value})}}
                    autoComplete="birth" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <CInputGroupText>직종</CInputGroupText>
                  <CFormSelect size="sm" value={memberInfo.occupation} onChange={(e) => {setMemberInfo({...memberInfo, "occupation": e.target.value})}}>
                    <option>직종 선택</option>
                    <option autoComplete="개발자">개발자</option>
                    <option autoComplete="퍼블리셔">퍼블리셔</option>
                    <option autoComplete="디자이너">디자이너</option>
                    <option autoComplete="기획자">기획자</option>
                  </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>전화번호</CInputGroupText>
                    <CFormInput type="text"
                    value={memberInfo.phone} 
                    onChange={(e) => {setMemberInfo({...memberInfo, "phone": e.target.value})}}
                    placeholder="전화번호" autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email"
                    value={memberInfo.email}
                    onChange={(e) => {setMemberInfo({...memberInfo, "email": e.target.value})}}                   
                    
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무 시작 가능일</CInputGroupText>
                    <CFormInput type="date" placeholder="업무 시작 가능일"
                    value={memberInfo.startdate} 
                    onChange={(e) => {setMemberInfo({...memberInfo, "startdate": e.target.value})}}
                    autoComplete="workday" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무가능 여부</CInputGroupText>                    
                    &nbsp;&nbsp;&nbsp;
                    <div style={{marginTop:'5px'}}>
                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" 
                    value={memberInfo.workstate} 
                    onChange={(e) => {setMemberInfo({...memberInfo, "workstate": 0})}} label="가능" defaultChecked/>
                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" 
                    value={memberInfo.workstate} 
                    onChange={(e) => {setMemberInfo({...memberInfo, "workstate": 1})}}
                    label="불가능" />
                    </div>
                  </CInputGroup>                      
                  <div className="d-grid">
                    <button type='submit' 
                    itemID='submitFreelancer'
                    onClick={
                      (e) => {                         
                        insertMemberInfo(memberInfo); 
                        setMemberInfo({});
                        e.preventDefault();
                    } 
                    }
                    >
                      <div>Create FreeLancer Account</div>
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
}

export default RegisterFreeLancer

import 'src/views/pages/registerButton.css'
import React, { useEffect, useState } from 'react'
import {
  CButton,
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
import axios from 'axios'
import { useNavigate } from 'react-router'


const RegisterAcademy = () => {


const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
const navigate = useNavigate();

//useEffect( 
  // () => {
  //   const loadTodos = async (e) => {
  //     //const response = await axios.get("http://localhost:8080/react-web/demo/load-todos");
  //     const response = await axios.get("http://127.0.0.1:8081/account/loadMemberId");
  //     setDoubleCheckId(response.data);
  //     //console.log(response.data)
  //   };
  //   loadTodos();
  // }, []
//);



const [academyInfo, setAcademyInfo] = useState({
  memberId: '',
  password: '',
  checkPassword: '',
  name: '',
  mname: '',
  mpostion: '',
  mphone: '',
  memail: '',
  address:'',
  companytype: '1',
  membertype: '2',
});
const insertAcademyInfo = () => {

  axios.get("http://127.0.0.1:8081/account/checkDuplication?memberId=" + academyInfo.memberId)
       .then((response) => {
          if (!response.data.validation) {
            alert('이미 있는 아이디입니다.')
            return;
          } else if (academyInfo.memberId.length === 0) {
            alert('아이디를 입력해주세요');
            return;
          } else if (academyInfo.password.match(passwordRegEx)  === null) {
            alert('비밀번호는 반드시 영어 대소문자와 숫자를 조합한 8 ~ 20 자로 입력해주세요');
            return;
          } else if (academyInfo.password !== academyInfo.checkPassword){
            alert('비밀번호가 일치하지 않습니다');
            return;
          } else if (academyInfo.name.length === 0 ) {
            alert('학원명을 입력해주세요');
            return;
          } else if (academyInfo.mname.length === 0 ) {
            alert('담당자 명을 입력해주세요');
            return;
          } else if (academyInfo.mpostion.length === 0 ) {
            alert('담당자 직책 입력해주세요');
            return;
          } else if (academyInfo.mphone.length === 0 ) {
            alert('담당자 연락처를 입력해주세요');
            return;
          } else if (academyInfo.memail.length === 0 ) {
            alert('담당자 이메일을 입력해주세요');
            return;
          } else if (academyInfo.memail.match(emailRegEx)  === null) {
            alert('이메일 형식을 맞춰주세요');
            return;
          } else if (academyInfo.address.length === 0 ) {
            alert('학원 주소를 입력해주세요');
            return;
          }
          // 서버에 데이터 전송 
          // axios.post("http://127.0.0.1:8080/react-web/demo/add-todo", 
          axios.post("http://127.0.0.1:8081/account/academyRegister", 
                      academyInfo,
                    { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
              .then( response => {
                alert('회원가입 완료');
                navigate('/login');
              })
              .catch( e => {          
                alert('error');
              });
        });
 
      
};


  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-2" style={{zIndex: 0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>학원 계정 생성</h1>
                  <p className="text-medium-emphasis">Create academy account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="사용자 ID" autoComplete="username"
                    value={academyInfo.memberId}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "memberId": e.target.value})}} />
                  </CInputGroup>                  
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="비밀번호는 영어 대소문자와 숫자를 조합한 8 ~ 20 자로 입력해주세요"
                      value={academyInfo.password}
                      onChange={(e) => {setAcademyInfo({...academyInfo, "password": e.target.value})}}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Repeat password"
                      value={academyInfo.checkPassword}
                      onChange={(e) => {setAcademyInfo({...academyInfo, "checkPassword": e.target.value})}}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>학원 명</CInputGroupText>
                    <CFormInput placeholder="학원 명"
                    value={academyInfo.name}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "name": e.target.value})}}
                    autoComplete="academyName" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 명</CInputGroupText>
                    <CFormInput placeholder="담당자 명"
                    value={academyInfo.mname}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "mname": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 직책</CInputGroupText>
                    <CFormInput placeholder="담당자 직책"
                    value={academyInfo.mpostion}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "mpostion": e.target.value})}}
                    autoComplete="grade" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 전화번호</CInputGroupText>
                    <CFormInput placeholder="담당자 전화번호"
                    value={academyInfo.mphone}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "mphone": e.target.value})}}
                    autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 이메일</CInputGroupText>
                    <CFormInput placeholder="이메일"
                    value={academyInfo.memail}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "memail": e.target.value})}}
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>학원 주소</CInputGroupText>
                    <CFormInput placeholder="학원 주소"
                    value={academyInfo.address}
                    onChange={(e) => {setAcademyInfo({...academyInfo, "address": e.target.value})}}
                    autoComplete="account" />
                  </CInputGroup>
                  <div className="d-grid">
                    <button type='submit'
                    onClick={
                      (e) => {                         
                        insertAcademyInfo(academyInfo); 
                        // setAcademyInfo({});
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

export default RegisterAcademy

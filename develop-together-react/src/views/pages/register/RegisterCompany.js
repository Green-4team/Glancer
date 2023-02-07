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
import axios from 'axios';

import { useNavigate } from 'react-router';



const RegisterCompany = (props) => {

  // const {loginInfo} = props;

  const passwordRegEx = /^[A-Za-z0-9]{8,20}$/;
  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const navigate = useNavigate();
  
  // useEffect( () => {
  //   if (loginInfo === null) {
  //     navigate('/login');
  //   }
  // })

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
  
  
  
   const [companyInfo, setCompanyInfo] = useState({
    memberId: '',
    password: '',
    checkPassword: '',
    name: '',
    mname: '',
    mpostion: '',
    mphone: '',
    memail: '',
    address:'',
    companytype: '0',
    headcount: '',
    contnent: '',
    annualsales: '',
    crn: '',
    brFile: null,
    membertype: '1',
  });
  const insertCompanyInfo = () => {
  
    axios.get("http://127.0.0.1:8081/account/checkDuplication?memberId=" + companyInfo.memberId)
         .then((response) => {
            if (!response.data.validation) {
              alert('이미 있는 아이디입니다.')
              return;
            } else if (companyInfo.memberId.length === 0) {
              alert('아이디를 입력해주세요');
              return;
            } else if (companyInfo.password.match(passwordRegEx)  === null) {
              alert('비밀번호는 반드시 영어 대소문자와 숫자를 조합한 8 ~ 20 자로 입력해주세요');
              return;
            } else if (companyInfo.password !== companyInfo.checkPassword){
              alert('비밀번호가 일치하지 않습니다');
              return;
            } else if (companyInfo.name.length === 0 ) {
              alert('기업명을 입력해주세요');
              return;
            } else if (companyInfo.mname.length === 0 ) {
              alert('담당자 명을 입력해주세요');
              return;
            } else if (companyInfo.mpostion.length === 0 ) {
              alert('담당자 직책 입력해주세요');
              return;
            } else if (companyInfo.mphone.length === 0 ) {
              alert('담당자 연락처를 입력해주세요');
              return;
            } else if (companyInfo.memail.length === 0 ) {
              alert('담당자 이메일을 입력해주세요');
              return;
            } else if (companyInfo.memail.match(emailRegEx)  === null) {
              alert('이메일 형식을 맞춰주세요');
              return;
            } else if (companyInfo.address.length === 0 ) {
              alert('회사 주소를 입력해주세요');
              return;
            }
            // 서버에 데이터 전송 

            const formData = new FormData();
            const keys = Object.keys(companyInfo);
            for (var i = 0; i < keys.length; i++) {
              formData.append(keys[i], companyInfo[keys[i]]);
            }
            // axios.post("http://127.0.0.1:8080/react-web/demo/add-todo", 
            axios.post("http://127.0.0.1:8081/account/comapanyRegister", 
                        formData,
                      { headers: { "Content-Type": "multipart/form-data" } })
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
                  <h1>기업 계정 생성</h1>
                  <p className="text-medium-emphasis">Create company account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="사용자 ID"
                    value={companyInfo.memberId}
                    onChange={(e) => {setCompanyInfo({...companyInfo, "memberId": e.target.value})}}
                    autoComplete="username" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="Password"
                       value={companyInfo.password}
                      onChange={(e) => {setCompanyInfo({...companyInfo, "password": e.target.value})}}
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
                       value={companyInfo.checkPassword}
                      onChange={(e) => {setCompanyInfo({...companyInfo, "checkPassword": e.target.value})}}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>기업 명</CInputGroupText>
                    <CFormInput placeholder="기업 명"
                     value={companyInfo.name}
                      onChange={(e) => {setCompanyInfo({...companyInfo, "name": e.target.value})}}
                    autoComplete="comapnyName" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 명</CInputGroupText>
                    <CFormInput placeholder="담당자 명"
                     value={companyInfo.mname}
                      onChange={(e) => {setCompanyInfo({...companyInfo, "mname": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 직책</CInputGroupText>
                    <CFormInput placeholder="담당자 직책"
                     value={companyInfo.mpostion}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "mpostion": e.target.value})}}
                    autoComplete="grade" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 전화번호</CInputGroupText>
                    <CFormInput placeholder="담당자 전화번호"
                    value={companyInfo.mphone}
                    onChange={(e) => {setCompanyInfo({...companyInfo, "mphone": e.target.value})}}
                    autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 이메일</CInputGroupText>
                    <CFormInput placeholder="이메일"
                    value={companyInfo.memail}
                    onChange={(e) => {setCompanyInfo({...companyInfo, "memail": e.target.value})}}
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>회사 주소</CInputGroupText>
                    <CFormInput placeholder="회사 주소"
                    value={companyInfo.address}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "address": e.target.value})}}
                    autoComplete="account" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>총 인원수</CInputGroupText>
                    <CFormInput type='number' placeholder="총 인원수"
                    value={companyInfo.headcount}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "headcount": e.target.value})}}
                    autoComplete="worker" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업 내용</CInputGroupText>
                    <CFormInput placeholder="사업 내용"
                     value={companyInfo.contnent}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "contnent": e.target.value})}}                    
                     autoComplete="business" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>연간 매출액</CInputGroupText>
                    <CFormInput type='number' placeholder="연간 매출액"
                     value={companyInfo.annualsales}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "annualsales": e.target.value})}}
                    autoComplete="fee" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업자 번호</CInputGroupText>
                    <CFormInput placeholder="사업자 번호"
                     value={companyInfo.crn}
                     onChange={(e) => {setCompanyInfo({...companyInfo, "crn": e.target.value})}}
                    autoComplete="businessNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">                    
                    <CFormInput type='file' placeholder="사업자 등록증"
                     onChange={(e) => {
                      setCompanyInfo({...companyInfo, "brFile": e.target.files[0]})
                    }}
                    autoComplete="businessCard" />
                    <CInputGroupText>사업자 등록증</CInputGroupText>
                  </CInputGroup>
                  <div className="d-grid">
                    <button type='submit'
                    onClick={
                      (e) => {                         
                        insertCompanyInfo(companyInfo); 
                        // setAcademyInfo({});
                        e.preventDefault();
                    } 
                    }
                    >
                      <div>Create Company Account</div>
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

export default RegisterCompany

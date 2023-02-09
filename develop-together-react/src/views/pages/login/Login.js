import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
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
import { useNavigate } from 'react-router-dom'

const Login = ({onLogin}) => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    memberId: '',
    password: '',
    membertype: '',
  });
  const login = () => {
    
    if (loginInfo.memberId.length === 0) {
      alert('아이디를 입력해주세요');
      return;
    } else if (loginInfo.password.length === 0){
      alert('비밀번호를 입력해주세요');
      return;
    } 

    axios.post("http://127.0.0.1:8081/account/login", 
                loginInfo,
                { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
          .then( response => {
    
            console.log(response.data);
            
            if(response.data === null || response.data === '') {
              alert('error');
              return;
            } else {
              onLogin(response.data);
              alert('로그인 완료');
              navigate('/class/class');
            }
          })
        .catch( e => {    
          alert('아이디 또는 비밀번호를 확인해주세요');              
        });
  }



  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm >
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="ID"
                       value={loginInfo.memberId}
                       onChange={(e) => {setLoginInfo({...loginInfo, "memberId": e.target.value})}}
                      autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        value={loginInfo.password}
                        onChange={(e) => {setLoginInfo({...loginInfo, "password": e.target.value})}}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary"
                        onClick={
                          (e) => {   
                            login(loginInfo);
                           
                            e.preventDefault();
                        } 
                        }
                        className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>회원가입</h2>
                    <br />
                    <p>
                      회사/학원/프리랜서 정보를 등록하세요!
                    </p>
                    <Link to="/ChooseRegisterType">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

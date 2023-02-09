import { cilLockLocked, cilUser } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CCard, CCardBody, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CRow } from "@coreui/react"
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import 'src/views/pages/registerButton.css'


const FreeEdit = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const AcademyInfo = location.state.AcademyInfo;
    let loginInfo = window.sessionStorage.getItem("loginInfo");
    loginInfo = JSON.parse(loginInfo);
    const [AcademyInfomaction, setAcademyInfomaction] = useState({       
      name: AcademyInfo.name,
      mname: AcademyInfo.mname,
      mpostion: AcademyInfo.mpostion,
      mphone: AcademyInfo.mphone,
      memail: AcademyInfo.memail,
      address:AcademyInfo.address,      
      // brFile: null,
      })
      
      
      const UpdateAcademyInfo = () => {
         
        axios.post("http://127.0.0.1:8081/account/AcademyUpdate?memberId=" + AcademyInfo.memberId, 
        AcademyInfomaction,
                  { headers: { "Content-Type": "application/x-www-form-urlencoded"}})
            .then( response => {
              alert('회원 정보 변경 완료');
              navigate('/Mypage');
            })
            .catch( e => {          
              alert('error');           
              console.log(AcademyInfomaction)   
            });
            
      };
      
    console.log(AcademyInfo.memberId)
    console.log(AcademyInfo)

    return (
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-2" style={{zIndex: 0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>학원 계정 변경</h1>
                  <p className="text-medium-emphasis">Change company account</p>                  
                  <CInputGroup className="mb-3">
                    <CInputGroupText>학원 명</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.name}
                     value={AcademyInfomaction.name}
                      onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "name": e.target.value})}}
                    autoComplete="comapnyName" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 명</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.mname}
                     value={AcademyInfomaction.mname}
                      onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "mname": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 직책</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.mpostion}
                     value={AcademyInfomaction.mpostion}
                     onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "mpostion": e.target.value})}}
                    autoComplete="grade" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 전화번호</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.mphone}
                    value={AcademyInfomaction.mphone}
                    onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "mphone": e.target.value})}}
                    autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 이메일</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.memail}
                    value={AcademyInfomaction.memail}
                    onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "memail": e.target.value})}}
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>학원 주소</CInputGroupText>
                    <CFormInput placeholder={AcademyInfo.address}
                    value={AcademyInfomaction.address}
                     onChange={(e) => {setAcademyInfomaction({...AcademyInfomaction, "address": e.target.value})}}
                    autoComplete="account" />
                  </CInputGroup>                 
                  <div className="d-grid">
                    <button type='submit'
                    onClick={
                      (e) => {                         
                        UpdateAcademyInfo(AcademyInfomaction); 
                        // setAcademyInfo({});
                        e.preventDefault();
                    } 
                    }
                    >
                      <div>Change your account</div>
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
    )

}

export default FreeEdit


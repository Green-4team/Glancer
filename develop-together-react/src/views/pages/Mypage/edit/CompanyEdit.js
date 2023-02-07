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
    const CompanyInfo = location.state.CompanyInfo;
    const loginInfo = location.state.loginInfo;
    const [CompanyInfomaction, setCompanyInfomaction] = useState({       
      name: CompanyInfo.name,
      mname: CompanyInfo.mname,
      mpostion: CompanyInfo.mpostion,
      mphone: CompanyInfo.mphone,
      memail: CompanyInfo.memail,
      address:CompanyInfo.address,
      headcount: CompanyInfo.headcount,
      contnent: CompanyInfo.contnent,
      annualsales: CompanyInfo.annualsales,
      crn: CompanyInfo.crn,
      // brFile: null,
      })
      
      //로그인 회원가입 
      const UpdateCompanyInfo = () => {
         
        axios.post("http://127.0.0.1:8081/account/CompanyUpdate?memberId=" + CompanyInfo.memberId, 
        CompanyInfomaction,
                  { headers: { "Content-Type": "application/x-www-form-urlencoded"}})
            .then( response => {
              alert('회원 정보 변경 완료');
              navigate('/Mypage' , { state: { loginInfo:loginInfo} } );
            })
            .catch( e => {          
              alert('error');           
              console.log(CompanyInfomaction)   
            });
            
      };
      
    console.log(CompanyInfo.memberId)
    console.log(CompanyInfo)

    return (
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-2" style={{zIndex: 0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>기업 계정 변경</h1>
                  <p className="text-medium-emphasis">Change company account</p>                  
                  <CInputGroup className="mb-3">
                    <CInputGroupText>기업 명</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.name}
                     value={CompanyInfomaction.name}
                      onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "name": e.target.value})}}
                    autoComplete="comapnyName" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 명</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.mname}
                     value={CompanyInfomaction.mname}
                      onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "mname": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 직책</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.mpostion}
                     value={CompanyInfomaction.mpostion}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "mpostion": e.target.value})}}
                    autoComplete="grade" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 전화번호</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.mphone}
                    value={CompanyInfomaction.mphone}
                    onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "mphone": e.target.value})}}
                    autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 이메일</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.memail}
                    value={CompanyInfomaction.memail}
                    onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "memail": e.target.value})}}
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>회사 주소</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.address}
                    value={CompanyInfomaction.address}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "address": e.target.value})}}
                    autoComplete="account" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>총 인원수</CInputGroupText>
                    <CFormInput type='number' placeholder={CompanyInfo.headcount}
                    value={CompanyInfomaction.headcount}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "headcount": e.target.value})}}
                    autoComplete="worker" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업 내용</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.contnent}
                     value={CompanyInfomaction.contnent}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "contnent": e.target.value})}}                    
                     autoComplete="business" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>연간 매출액</CInputGroupText>
                    <CFormInput type='number' placeholder={CompanyInfo.annualsales}
                     value={CompanyInfomaction.annualsales}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "annualsales": e.target.value})}}
                    autoComplete="fee" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업자 번호</CInputGroupText>
                    <CFormInput placeholder={CompanyInfo.crn}
                     value={CompanyInfomaction.crn}
                     onChange={(e) => {setCompanyInfomaction({...CompanyInfomaction, "crn": e.target.value})}}
                    autoComplete="businessNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">                    
                    <CFormInput type='file' placeholder="사업자 등록증"
                    //  onChange={(e) => {
                    //   setCompanyInfomaction({...CompanyInfomaction, "brFile": e.target.files[0]})
                    // }}
                    autoComplete="businessCard" />
                    <CInputGroupText>사업자 등록증</CInputGroupText>
                  </CInputGroup>
                  <div className="d-grid">
                    <button type='submit'
                    onClick={
                      (e) => {                         
                        UpdateCompanyInfo(CompanyInfomaction); 
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


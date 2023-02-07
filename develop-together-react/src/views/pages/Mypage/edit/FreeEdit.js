import { cilLockLocked, cilUser } from "@coreui/icons"
import CIcon from "@coreui/icons-react"
import { CCard, CCardBody, CCol, CContainer, CForm, CFormCheck, CFormInput, CFormSelect, CInputGroup, CInputGroupText, CRow } from "@coreui/react"
import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import 'src/views/pages/registerButton.css'


const FreeEdit = (props) => {

    const location = useLocation();
    const FreeLancerInforma = location.state.FreeLancerInfo;
    const loginInfo = location.state.loginInfo;
    const [FreelancerInfomaction, setFreelancerInfomaction] = useState({       
      name: FreeLancerInforma.name,
      birthday: FreeLancerInforma.birthday,
      occupation: FreeLancerInforma.occupation,
      phone: FreeLancerInforma.phone,
      startdate: FreeLancerInforma.startdate,
      email: FreeLancerInforma.email,
      })
      const navigate = useNavigate();
      //로그인 회원가입 
      const UpdateMemberInfo = () => {
         
        axios.post("http://127.0.0.1:8081/account/freelancerUpdate?memberId=" + FreeLancerInforma.memberId , 
        FreelancerInfomaction,
                  { headers: { "Content-Type": "application/x-www-form-urlencoded"}})
            .then( response => {
              alert('회원 정보 변경 완료');
              navigate('/Mypage', { state: { loginInfo:loginInfo} } );
            })
            .catch( e => {          
              alert('error');           
              console.log(FreelancerInfomaction)   
            });
            
      };
      
    

    return (
        <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-2 " style={{zIndex:0}}>
              <CCardBody className="p-4">
                <CForm>
                  <h1>프리랜서 계정 변경</h1>
                  <p className="text-medium-emphasis">Change your account</p>                   
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupText>성명</CInputGroupText>
                    <CFormInput placeholder={FreeLancerInforma.name} 
                     value={FreelancerInfomaction.name} 
                     onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "name": e.target.value})}}
                    autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>생년월일</CInputGroupText>
                    <CInputGroupText>{FreeLancerInforma.birthday}</CInputGroupText>       
                    <CFormInput type='date' placeholder={FreeLancerInforma.birthday}
                    value={FreelancerInfomaction.birthday} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "birthday": e.target.value})}}
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <CInputGroupText>직종</CInputGroupText>
                  <CFormSelect size="sm" value={FreelancerInfomaction.occupation} onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "occupation": e.target.value})}}>
                    <option>{FreeLancerInforma.occupation}</option>
                    <option autoComplete="개발자">개발자</option>
                    <option autoComplete="퍼블리셔">퍼블리셔</option>
                    <option autoComplete="디자이너">디자이너</option>
                    <option autoComplete="기획자">기획자</option>
                  </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>전화번호</CInputGroupText>
                    <CFormInput type="text"
                    value={FreelancerInfomaction.phone} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "phone": e.target.value})}}
                    placeholder={FreeLancerInforma.phone} autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder={FreeLancerInforma.email}
                    value={FreelancerInfomaction.email}
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "email": e.target.value})}}                   
                    
                    autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무 시작 가능일</CInputGroupText>
                    <CInputGroupText>{FreeLancerInforma.startdate}</CInputGroupText>
                    <CFormInput type="date" placeholder={FreeLancerInforma.startdate}
                    value={FreelancerInfomaction.startdate} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "startdate": e.target.value})}}
                    autoComplete="workday" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무가능 여부</CInputGroupText>                    
                    &nbsp;&nbsp;&nbsp;
                    <div style={{marginTop:'5px'}}>
                     {FreeLancerInforma.workstate === true ? <> <CFormCheck inline type="radio" name="inlineRadioOptions"
                    value={FreelancerInfomaction.workstate} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "workstate": 0})}} label="가능" defaultChecked/>
                    <CFormCheck inline type="radio" name="inlineRadioOptions"
                    value={FreelancerInfomaction.workstate} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "workstate": 1})}}
                    label="불가능" /></> : <>
                     <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" 
                    value={FreelancerInfomaction.workstate} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "workstate": 0})}} label="가능" />
                    <CFormCheck inline type="radio" name="inlineRadioOptions"
                    value={FreelancerInfomaction.workstate} 
                    onChange={(e) => {setFreelancerInfomaction({...FreelancerInfomaction, "workstate": 1})}}
                    label="불가능" defaultChecked/>

                    </>}   
                   
                    </div>
                  </CInputGroup>                      
                  <div className="d-grid">
                    <button type='submit'
                    onClick={
                      (e) => {                         
                        UpdateMemberInfo(FreelancerInfomaction);
                        <Link to='/Mypage' state={{loginInfo:loginInfo}}></Link>
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


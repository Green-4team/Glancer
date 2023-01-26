import React from 'react'
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
import { CFormCheck, CFormSelect } from '@coreui/react/dist'

const Register = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>프리랜서 계정 생성</h1>
                  <p className="text-medium-emphasis">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput placeholder="사용자 ID" autoComplete="username" />
                  </CInputGroup>                 
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="비밀번호"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      type="password"
                      placeholder="비밀번호 확인"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>성명</CInputGroupText>
                    <CFormInput placeholder="성명" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>생년월일</CInputGroupText>
                    <CFormInput type='date' placeholder="생년월일" autoComplete="birth" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <CInputGroupText>직종</CInputGroupText>
                  <CFormSelect size="sm">
                    <option>직종 선택</option>
                    <option value="개발자">개발자</option>
                    <option value="퍼블리셔">퍼블리셔</option>
                    <option value="디자이너">디자이너</option>
                    <option value="기획자">기획자</option>
                  </CFormSelect>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>전화번호</CInputGroupText>
                    <CFormInput type="text" placeholder="전화번호" autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무 시작 가능일</CInputGroupText>
                    <CFormInput type="date" placeholder="업무 시작 가능일" autoComplete="workday" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>업무가능 여부</CInputGroupText>                    
                    &nbsp;&nbsp;&nbsp;
                    <div style={{marginTop:'5px'}}>
                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="0" label="가능" />
                    <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="1" label="불가능" />
                    </div>
                  </CInputGroup>


                  <div className="d-grid">
                    <CButton color="success">Create FreeLancer Account</CButton>
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

export default Register

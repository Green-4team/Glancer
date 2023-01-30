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

const RegisterCompany = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>기업 계정 생성</h1>
                  <p className="text-medium-emphasis">Create company account</p>
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
                      placeholder="Password"
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
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>기업 명</CInputGroupText>
                    <CFormInput placeholder="학원 명" autoComplete="comapnyName" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 명</CInputGroupText>
                    <CFormInput placeholder="담당자 명" autoComplete="name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 직책</CInputGroupText>
                    <CFormInput placeholder="담당자 직책" autoComplete="grade" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 전화번호</CInputGroupText>
                    <CFormInput placeholder="담당자 전화번호" autoComplete="phoneNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>담당자 이메일</CInputGroupText>
                    <CFormInput placeholder="이메일" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>회사 주소</CInputGroupText>
                    <CFormInput placeholder="회사 주소" autoComplete="account" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>총 인원수</CInputGroupText>
                    <CFormInput type='number' placeholder="총 인원수" autoComplete="worker" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업 내용</CInputGroupText>
                    <CFormInput placeholder="사업 내용" autoComplete="business" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>연간 매출액</CInputGroupText>
                    <CFormInput type='number' placeholder="연간 매출액" autoComplete="fee" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>사업자 번호</CInputGroupText>
                    <CFormInput placeholder="사업자 번호" autoComplete="businessNo" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">                    
                    <CFormInput type='file' placeholder="사업자 등록증" autoComplete="businessCard" />
                    <CInputGroupText>사업자 등록증</CInputGroupText>
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton color="success">Create Company Account</CButton>
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

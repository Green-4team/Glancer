import freeLancer from 'src/assets/images/free-lancer.jpg'
import Company from 'src/assets/images/company.jpg'
import Academy from 'src/assets/images/academy.jpg'
import React from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardGroup,
  CCardHeader,
  CCardImage,
  CCardLink,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CListGroup,
  CListGroupItem,
  CNav,
  CNavItem,
  CNavLink,
  CCol,
  CRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'
import { CContainer } from '@coreui/react/dist'

const ChooseRegisterType = (props) => {

    return (
    <div className="min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-4 border-top-3 border-top-info border-info">
          <CCardHeader  className='text-center'>
            <strong>회원 타입 선택</strong> <small>Choose Your Register Type</small>
          </CCardHeader>                    
          <CCardBody>
              <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                <CCol xs>
                <Link to='/RegisterFreeLancer' style={{textDecoration:'none', color:'black'}}>
                  <CCard>
                    <CCardImage orientation="top" src={freeLancer} />
                    <CCardBody  className='text-center'>
                      <CCardTitle>프리랜서</CCardTitle>
                      <CCardText>
                        프리랜서 혹은 강사 전용 회원가입
                      </CCardText>
                    </CCardBody>
                  </CCard>
                </Link>
                </CCol>
                <CCol xs>
                <Link to='/RegisterCompany' style={{textDecoration:'none', color:'black'}}>
                  <CCard>
                    <CCardImage orientation="top" src={Company} />
                    <CCardBody  className='text-center'>
                      <CCardTitle>기업</CCardTitle>
                      <CCardText>
                        프로젝트 등록 및 프리랜서 모집 전용 회원가입
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  </Link>
                </CCol>
                <CCol xs>
                <Link to='/RegisterAcademy' style={{textDecoration:'none', color:'black'}}>
                  <CCard>
                    <CCardImage orientation="top" src={Academy} />
                    <CCardBody  className='text-center'>
                      <CCardTitle>학원</CCardTitle>
                      <CCardText>
                        강의 등록 및 수강생 모집 전용 회원가입
                      </CCardText>
                    </CCardBody>
                  </CCard>
                  </Link>
                </CCol>
              </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      </CRow>
      </CContainer>
      </div>
    )
}

export default ChooseRegisterType
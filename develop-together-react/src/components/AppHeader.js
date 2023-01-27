import { cilMenu, cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler, CNavItem, CNavLink
} from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import { logo } from 'src/assets/brand/logo'
import { AppHeaderDropdown } from './header/index'
import { AppBreadcrumb } from './index'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <div style={{marginLeft:'auto',marginRight:'auto'}}>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <div style={{marginRight: 50}}>
          <CNavItem>
            <CNavLink to="/project/freelancer" component={NavLink}>
              프로젝트
            </CNavLink>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <CNavLink href="#">강의</CNavLink>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <CNavLink to='/board/qna' component={NavLink}>게시판</CNavLink>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <CNavLink href="#">블로그</CNavLink>
          </CNavItem>
          </div>
        </CHeaderNav>
        </div>
        <CHeaderNav>
          {/* <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem> */}
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilSearch} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/login" component={NavLink}>
              {/* <CIcon icon={cilEnvelopeOpen} size="lg" /> */}
              로그인
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader

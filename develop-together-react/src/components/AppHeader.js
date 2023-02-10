import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav, CNavItem, CNavLink
} from '@coreui/react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


import { logo } from 'src/assets/brand/logo'
import styled from 'styled-components'
import { AppHeaderDropdown } from './header/index'
import { AppBreadcrumb } from './index'

const DropMenuBlock = styled.div`

.dropbtn {
  color: gray;
  background-color: white;
  font-size: 12pt;
  border: none;
  padding: 8px;
}
 
.dropdown {
  position: relative;
  display: inline-block;
}
 
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.1);
  z-index: 1;
}
 
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropbtn:hover {color: #24a0ed;}

.dropdown-content a:hover {color: #24a0ed;}
 
.dropdown:hover .dropdown-content {display: block;}

`;
const AppHeader = (props) => {

  const {loginInfo, onLogout} = props; 

  return (
    <DropMenuBlock>
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <div style={{marginLeft:'auto',marginRight:'auto'}}>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <div style={{marginRight: 50}}>
          <CNavItem>
            <div class="dropdown">
              <button class="dropbtn">구인&구직</button>
              <div class="dropdown-content">
                <Link to='/project/freelancer'  component={NavLink}>프리랜서</Link>
                {/* <CNavLink to='/project/project'  component={NavLink}>프로젝트</CNavLink> */}
              </div>
            </div>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <div class="dropdown">
              <button class="dropbtn">강의</button>
              <div class="dropdown-content">
                <CNavLink to='/class/class'  component={NavLink}>강의</CNavLink>
                <CNavLink to='/class/teacher' component={NavLink}>강사</CNavLink>
              </div>
            </div>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <div class="dropdown">
              <button class="dropbtn">게시판</button>
              <div class="dropdown-content">
                <Link to='/board/qna/list' component={NavLink} state={{ loginInfo: loginInfo }}>Q&A</Link>
              </div>
            </div>
          </CNavItem>
          </div>
          <div style={{marginRight: 50}}>
          <CNavItem>
            <CNavLink to="/Blogs" component={NavLink}>IT뉴스</CNavLink>
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
            <CNavLink to="/search" component={NavLink}>
              <CIcon icon={cilSearch} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
          { loginInfo === null ? <CNavLink to="/login" component={NavLink} >로그인</CNavLink> 
          : 
          <CHeaderNav className="ms-3">
          <AppHeaderDropdown loginInfo={loginInfo} onLogout={onLogout} />
        </CHeaderNav>}
          </CNavItem>
        </CHeaderNav>
        
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
    </DropMenuBlock>
  )
}

export default AppHeader

import { CCard, CCardBody, CCardHeader, CCol, CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import CompanyProfil from "./Profil/CompanyProfil";
import FreeLancerProfil from "./Profil/FreeLancerProfil";


const Mypage = () => {
    
    
    const location = useLocation();
    const loginInfo = location.state.loginInfo;

    console.log(loginInfo)

    return (
        <>
    <CNavbar expand="lg" colorScheme="light" className="">
      <CContainer fluid>
        <CNavbarBrand><Link to="/Mypage" state={{loginInfo:loginInfo}} style={{textDecoration:'none', color:'black'}}>나의 프로필 관리</Link></CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"         
        />
        <CCollapse className="navbar-collapse" >
          <CNavbarNav>
            <CNavItem>
              <CNavLink >
               프로젝트 지원 현왕 
              </CNavLink>
            </CNavItem>            
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    { loginInfo.membertype === 0 ? <FreeLancerProfil loginInfo={loginInfo}/> :  loginInfo.membertype === 1 ? <CompanyProfil loginInfo={loginInfo}/> : <div>asdsadsad</div>}
    
  </>
    )

}

export default Mypage
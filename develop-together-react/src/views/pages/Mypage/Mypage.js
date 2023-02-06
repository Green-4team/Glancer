import { CCard, CCardBody, CCardHeader, CCol, CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import FreeLancerProfil from "./Profil/FreeLancerProfil";


const Mypage = (props) => {
    
    
    const location = useLocation();
    const loginInfo = location.state.loginInfo;

    console.log(loginInfo)

    return (
        <>
    <CNavbar expand="lg" colorScheme="light" className="">
      <CContainer fluid>
        <CNavbarBrand><Link to="/Mypage" style={{textDecoration:'none', color:'black'}}>나의 프로필 관리</Link></CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"         
        />
        <CCollapse className="navbar-collapse" >
          <CNavbarNav>
            <CNavItem>
              <CNavLink href="#">
               프로젝트 지원 현왕 
              </CNavLink>
            </CNavItem>            
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
    <FreeLancerProfil loginInfo={loginInfo}/>
  </>
    )

}

export default Mypage
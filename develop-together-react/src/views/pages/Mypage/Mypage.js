import { CCard, CCardBody, CCardHeader, CCol, CCollapse, CContainer, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from "@coreui/react"
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import AcademyApply from "./apply/AcademyApply";
import ClassApply from "./apply/ClassApply";
import AcademyProfil from "./Profil/AcademyProfil";
import CompanyProfil from "./Profil/CompanyProfil";
import FreeLancerProfil from "./Profil/FreeLancerProfil";


const Mypage = () => {
   
  
  const navigate = useNavigate();
    const location = useLocation();
   const loginInfo = location.state.loginInfo;;
  

  useEffect( () => {
    if (location.state.loginInfo === null || location.state.loginInfo === "") {
      navigate('/login');
      return;
    } else {
      
    }
  });
    console.log(loginInfo)

    return (
        <>
    <CNavbar expand="lg" colorScheme="light" className="">
      <CContainer fluid>
        <CNavbarBrand><Link to="/Mypage" state={{loginInfo:loginInfo}} style={{textDecoration:'none', color:'black'}}>나의 프로필 관리</Link></CNavbarBrand>
        <CNavbarToggler
          aria-label="Toggle navigation"         
        />
        </CContainer>
    </CNavbar>
    { loginInfo.membertype === 0 ? <FreeLancerProfil loginInfo={loginInfo}/> :  loginInfo.membertype === 1 ? <CompanyProfil loginInfo={loginInfo}/> : <AcademyProfil loginInfo={loginInfo}/>}
    { loginInfo.membertype === 0 ? <ClassApply loginInfo={loginInfo}/> :  loginInfo.membertype === 2 ? <AcademyApply loginInfo={loginInfo}/> : <div></div> }
  </>
    )

}

export default Mypage
import React from 'react'
import {
  CAvatar,
  CBadge,
  CButton,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
  cilAlignLeft,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { Link, useNavigate } from 'react-router-dom'

const AppHeaderDropdown = ({onLogout, loginInfo}) => {
  const navigate = useNavigate();

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
      <CIcon icon={cilAlignLeft} className="me-2" size='lg' style={{marginTop:'7px'}}/>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">{loginInfo.memberId}님 환영합니다</CDropdownHeader>
        <div onClick={ (e) => {                
            onLogout();
            navigate("/class/class");
            window.location.reload();
            e.preventDefault();} } 
            >
        <CDropdownItem href=''>          
        <CIcon icon={cilLockLocked} className="me-2"  style={{color:'black'}}/>
          <div style={{color:'black',display:'inline-block' , cursor:'pointer'}}>Logout</div>                
        </CDropdownItem>
        </div>    
        <CDropdownItem>
          <Link to="/Mypage" style={{color:'black', textDecoration:'none'}}>
          <CIcon icon={cilUser} className="me-2" />
          My Page
          </Link>         
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown

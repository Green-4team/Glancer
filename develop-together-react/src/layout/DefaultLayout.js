import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = (props) => {

  const {loginInfo, onLogout} = props; 

  return (
    <div>
      
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader loginInfo={loginInfo} onLogout={ onLogout }/>
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
       
      </div>
    </div>
  )
}

export default DefaultLayout

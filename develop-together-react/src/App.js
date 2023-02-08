import axios from 'axios'
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom'
import './scss/style.scss'
import Mypage from './views/pages/Mypage/Mypage'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))
const ChooseRegisterType = React.lazy(() => import('./views/pages/register/ChooseRegisterType'))
const RegisterFreeLancer = React.lazy(() => import('./views/pages/register/RegisterFreeLancer'))
const RegisterCompany = React.lazy(() => import('./views/pages/register/RegisterCompany'))
const RegisterAcademy = React.lazy(() => import('./views/pages/register/RegisterAcademy'))


class App extends Component {
  constructor(props) {
    super(props);

    const loginInfoString = window.sessionStorage.getItem("loginInfo");
    console.log(loginInfoString);
    let loginInfo = null;
    if (loginInfoString) {
      loginInfo = JSON.parse(loginInfoString);      
    }

    this.state = {
      "loginInfo": loginInfo
    }

    // 로그인 여부 조회
    // axios.get("http://127.0.0.1:8081/account/LoginCheck")
    //      .then((response) => {
    //       console.log(response.data)
    //       this.setState( {...this.state, "loginInfo": response.data ? response.data : null });
    //      })

  }

  setUserInfo = (loginInfo) => {    
    this.setState( {...this.state, "loginInfo": loginInfo })
    const loginInfoString = JSON.stringify(loginInfo);
    window.sessionStorage.setItem("loginInfo", loginInfoString);
    
  };
  
  setLogout = () => {
    this.setState({...this.state, "loginInfo": null })
    window.sessionStorage.removeItem("loginInfo");
  };

  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>            
          
            <Route exact path="/login" name="Login Page" element={<Login onLogin={this.setUserInfo}/>} />
            <Route exact path="/ChooseRegisterType" name="Register Type Page" element={<ChooseRegisterType />} />
            <Route exact path="/RegisterFreeLancer" name="RegisterFreeLancer Page" element={<RegisterFreeLancer />} />
            <Route exact path="/RegisterCompany" name="RegisterCompany Page" element={<RegisterCompany />} />
            <Route exact path="/RegisterAcademy" name="RegisterAcademy Page" element={<RegisterAcademy />} />            
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout loginInfo={this.state.loginInfo} onLogout={this.setLogout} />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App

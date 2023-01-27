import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

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
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/ChooseRegisterType" name="Register Type Page" element={<ChooseRegisterType />} />
            <Route exact path="/RegisterFreeLancer" name="RegisterFreeLancer Page" element={<RegisterFreeLancer />} />
            <Route exact path="/RegisterCompany" name="RegisterCompany Page" element={<RegisterCompany />} />
            <Route exact path="/RegisterAcademy" name="RegisterAcademy Page" element={<RegisterAcademy />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
